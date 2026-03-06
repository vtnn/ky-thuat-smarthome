import docx2txt, sys, PyPDF2
def parse_docx(f): return docx2txt.process(f)
def parse_pdf(f):
    try:
        reader = PyPDF2.PdfReader(f)
        return "\n".join(page.extract_text() for page in reader.pages)
    except: return "PDF parse failed"

with open("docs_extracted.txt", "w") as out:
    out.write("==== HVAC DOCX ====\n")
    out.write(parse_docx("/tmp/miu_docs/hvac.docx"))
    out.write("\n\n==== CUBE DOCX ====\n")
    out.write(parse_docx("/tmp/miu_docs/cube.docx"))
    out.write("\n\n==== GENERAL CONTROLLER PDF ====\n")
    out.write(parse_pdf("/tmp/miu_docs/general_controller.pdf"))
    out.write("\n\n==== HOW TO REALIZE DOUBLE PDF ====\n")
    out.write(parse_pdf("/tmp/miu_docs/cube_folder/How to realize double with Cube switch module control.pdf"))
