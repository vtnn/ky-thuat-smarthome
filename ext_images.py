import fitz
import os
import shutil

DST = "site/src/assets/images"

def ext_pdf(pdf_path, prefix):
    doc = fitz.open(pdf_path)
    count = 1
    for i in range(len(doc)):
        for img in doc.get_page_images(i):
            xref = img[0]
            pix = fitz.Pixmap(doc, xref)
            if pix.n - pix.alpha > 3:
                pix = fitz.Pixmap(fitz.csRGB, pix)
            pix.save(f"{DST}/{prefix}_{count}.png")
            pix = None
            count += 1

def copy_docx_imgs(src_dir, prefix):
    for fn in os.listdir(src_dir):
        ext = fn.split('.')[-1]
        new_name = f"{prefix}_{fn.replace('image','')}"
        if not new_name.endswith(ext): new_name += f".{ext}"
        shutil.copy(f"{src_dir}/{fn}", f"{DST}/{new_name.replace('jpeg','jpg')}")

ext_pdf("/tmp/miu_docs/general_controller.pdf", "general_ctrl")
ext_pdf("/tmp/miu_docs/cube_folder/How to realize double with Cube switch module control.pdf", "cube_double")
copy_docx_imgs("/tmp/miu_hvac/word/media", "hvac")
copy_docx_imgs("/tmp/miu_cube/word/media", "cube")
