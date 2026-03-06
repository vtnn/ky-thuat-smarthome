import fitz
import os
import shutil

def ext_pdf(pdf_path, dest_dir):
    if not os.path.exists(pdf_path): return
    if not os.path.exists(dest_dir): os.makedirs(dest_dir)
    doc = fitz.open(pdf_path)
    count = 1
    for i in range(len(doc)):
        for img in doc.get_page_images(i):
            xref = img[0]
            pix = fitz.Pixmap(doc, xref)
            if pix.n - pix.alpha > 3:
                pix = fitz.Pixmap(fitz.csRGB, pix)
            pix.save(f"{dest_dir}/img_{count}.png")
            pix = None
            count += 1

def copy_docx_imgs(src_dir, dest_dir):
    if not os.path.exists(src_dir): return
    if not os.path.exists(dest_dir): os.makedirs(dest_dir)
    for fn in os.listdir(src_dir):
        shutil.copy(os.path.join(src_dir, fn), os.path.join(dest_dir, fn))

copy_docx_imgs("/tmp/miu_hvac/word/media", "site/public/gallery/hvac")
copy_docx_imgs("/tmp/miu_cube/word/media", "site/public/gallery/cube")
ext_pdf("/tmp/miu_docs/general_controller.pdf", "site/public/gallery/general_controller")

# For the cube folder, it has multiple files
base_cube_folder = "/tmp/miu_docs/cube_folder"
if os.path.exists(base_cube_folder):
    for fn in os.listdir(base_cube_folder):
        fpath = os.path.join(base_cube_folder, fn)
        if fn.endswith(".pdf"):
            ext_pdf(fpath, f"site/public/gallery/cube_folder/{fn.replace(' ','_')}")
        elif fn.endswith(".docx"):
            tmp_unzip = f"/tmp/miu_{fn.replace(' ','_')}"
            os.system(f"unzip -q -o '{fpath}' -d {tmp_unzip}")
            copy_docx_imgs(f"{tmp_unzip}/word/media", f"site/public/gallery/cube_folder/{fn.replace(' ','_')}")
