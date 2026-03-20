import os
import sys
import fitz  # PyMuPDF
import base64
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

# Initialize OpenAI Client
api_key = os.getenv("OPENAI_API_KEY")
if not api_key:
    print("Please set OPENAI_API_KEY in your .env file.")
    sys.exit(1)

client = OpenAI(api_key=api_key)

def pdf_page_to_image(doc, page_num, output_folder):
    """Convert a specific PDF page to a high-resolution PNG image."""
    page = doc[page_num]
    
    # Increase resolution for better OCR
    zoom_x = 2.0  # horizontal zoom
    zoom_y = 2.0  # vertical zoom
    mat = fitz.Matrix(zoom_x, zoom_y)
    
    pix = page.get_pixmap(matrix=mat)
    
    os.makedirs(output_folder, exist_ok=True)
    image_path = os.path.join(output_folder, f"page_{page_num + 1}.png")
    pix.save(image_path)
    return image_path

def process_image_with_openai(image_path):
    """Sends the image to GPT-4o-mini to extract text and LaTeX formulas."""
    
    prompt = r"""
    You are an expert Moroccan high school teacher in Mathematics and Physics. 
    Please extract all the text and mathematical content from this image. 
    Follow these strict rules:
    1. Output MUST be in pure Markdown format.
    2. NEVER use images or screenshots in your output.
    3. Mathematical formulas MUST be perfectly formatted in LaTeX.
       - Use $ for inline math (e.g., $f(x) = x^2$)
       - Use $$ for block math (e.g., $$ \lim_{x \to 0} \frac{\sin x}{x} = 1 $$)
    4. Keep the original language exactly as it is (French / Arabic).
    5. Maintain the exact structure, headings, and lists found in the document.
    6. Do not add conversational filler. Output ONLY the extracted markdown content.
    """

    print(f"Sending {os.path.basename(image_path)} to OpenAI (GPT-4o-mini)...")
    
    # Encode image to base64
    with open(image_path, "rb") as image_file:
        base64_image = base64.b64encode(image_file.read()).decode('utf-8')
    
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {
                "role": "user",
                "content": [
                    {"type": "text", "text": prompt},
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": f"data:image/png;base64,{base64_image}"
                        }
                    }
                ]
            }
        ],
        max_tokens=4096
    )
    
    return response.choices[0].message.content

def extract_pdf_with_openai(pdf_path, start_page=1, end_page=None, output_filename=None):
    """
    Extracts text and math from a PDF using OpenAI Vision.
    """
    output_folder = "temp_images"
    final_markdown = ""
    
    pdf_document = fitz.open(pdf_path)
    total_pages = len(pdf_document)
    
    # Adjust start_page and end_page for 0-indexed internal use
    # User-facing start_page and end_page are 1-indexed
    start_page_0_indexed = max(0, start_page - 1)
    
    if end_page is None or end_page > total_pages:
        end_page_0_indexed = total_pages - 1
    else:
        end_page_0_indexed = min(total_pages - 1, end_page - 1)
        
    if start_page_0_indexed > end_page_0_indexed:
        print(f"Warning: start_page ({start_page}) is after end_page ({end_page}). No pages will be processed.")
        return

    base_name = os.path.splitext(os.path.basename(pdf_path))[0]
    if output_filename is None:
        output_filename = f"{base_name}_gemini_extracted.md"
    
    # Only create/clear the file once at the beginning
    with open(output_filename, "w", encoding="utf-8") as f:
        f.write("")
        
    print(f"Processing '{os.path.basename(pdf_path)}' from page {start_page_0_indexed + 1} to {end_page_0_indexed + 1}...")
    
    for page_num_0_indexed in range(start_page_0_indexed, end_page_0_indexed + 1):
        # 1. Convert to Image using the already opened document
        img_path = pdf_page_to_image(pdf_document, page_num_0_indexed, output_folder)
        
        try:
            markdown_content = process_image_with_openai(img_path)
            # Append immediately to the file so no progress is lost
            with open(output_filename, "a", encoding="utf-8") as f:
                f.write(f"\n\n<!-- Page {page_num_0_indexed + 1} -->\n\n{markdown_content}")
        except Exception as e:
            print(f"Error processing page {page_num_0_indexed + 1}: {e}")
            
        # Clean up the image to save disk space over 1832 pages
        try:
            os.remove(img_path)
        except:
            pass
            
    pdf_document.close()
    print(f"\n[SUCCESS] Extraction complete! Saved to {output_filename}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python extract_openai.py <path_to_pdf>")
    else:
        # Example: Just doing pages 2 to 4 (Indices 1 to 3) as a test
        extract_pdf_with_openai(sys.argv[1], start_page=2, end_page=3)
