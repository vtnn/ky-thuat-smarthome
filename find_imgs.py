import os
import re

base_path = "site/src/content/docs"
assets_path = "site/src/assets/images"

used = {}
for root, dirs, files in os.walk(base_path):
    for f in files:
        if f.endswith(".md") or f.endswith(".mdx"):
            file_path = os.path.join(root, f)
            with open(file_path, "r") as fp:
                content = fp.read()
            
            matches = re.finditer(r'\]\(([^)]*?assets/images/([^)]+))\)|src="([^"]*?assets/images/([^"]+))"', content)
            for m in matches:
                img_name = m.group(2) if m.group(2) else m.group(4)
                if file_path not in used:
                    used[file_path] = []
                used[file_path].append(img_name)

print("USED IMAGES:")
for k, v in used.items():
    print(k, "=>",  v)
