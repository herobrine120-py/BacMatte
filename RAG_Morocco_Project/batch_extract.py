import os
import sys
import io
import glob
import time

# Force UTF-8 encoding for standard output
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

from extract_openai import extract_pdf_with_openai

# Directories containing the PDFs
PDF_DIRS = [
    r"..\BacMatte\2bac\Math",
    r"..\BacMatte\2bac\Physique et chimie",
]

# Output directory for Markdown files
OUTPUT_DIR = "./extracted_markdowns"

def process_all_pdfs():
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)

    all_pdfs = []
    for d in PDF_DIRS:
        all_pdfs.extend(glob.glob(os.path.join(d, "*.pdf")))

    print(f"Found {len(all_pdfs)} PDF files to process.")
    
    for pdf_path in all_pdfs:
        basename = os.path.basename(pdf_path)
        name_without_ext = os.path.splitext(basename)[0]
        # Clean the name to prevent path issues
        safe_name = "".join([c for c in name_without_ext if c.isalpha() or c.isdigit() or c in (' ', '-', '_')]).rstrip()
        out_file = os.path.join(OUTPUT_DIR, f"{safe_name}_extracted.md")
        
        if os.path.exists(out_file):
            print(f"Skipping {basename}, already extracted.")
            continue
            
        print(f"\n--- Processing {basename} ---")
        try:
            # Extract the entire book utilizing the generous 1.5 Flash limits
            extract_pdf_with_openai(pdf_path, output_filename=out_file)
            print(f"Finished processing {basename}")
        except Exception as e:
            print(f"Error processing {basename}: {e}")
            
        # Small delay to respect rate limits if any
        time.sleep(2)

if __name__ == "__main__":
    process_all_pdfs()
