import fitz  # PyMuPDF
import sys
import os

def extract_pdf_test(pdf_path, max_pages=3):
    print(f"Opening: {pdf_path}")
    try:
        doc = fitz.open(pdf_path)
    except Exception as e:
        print(f"Error opening pdf: {e}")
        return

    num_pages = min(max_pages, len(doc))
    print(f"Extracting first {num_pages} pages...\n")
    
    output_text = ""
    for page_num in range(num_pages):
        page = doc[page_num]
        # Text extraction
        text = page.get_text()
        output_text += f"\n--- Page {page_num + 1} ---\n"
        output_text += text
    
    output_file = "extracted_sample.txt"
    with open(output_file, "w", encoding="utf-8") as f:
        f.write(output_text)
    
    print(f"Extraction complete. Check {output_file}")
    
if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python test_extraction.py <path_to_pdf>")
    else:
        extract_pdf_test(sys.argv[1])
