import os
import re

TEMPLATES_DIR = r"e:\crowdera\src\templates"

def analyze_templates():
    templates = sorted(os.listdir(TEMPLATES_DIR), key=lambda x: int(x.split('-')[1]) if '-' in x else x)
    for temp in templates:
        temp_dir = os.path.join(TEMPLATES_DIR, temp)
        comp_dir = os.path.join(temp_dir, "components")
        if not os.path.isdir(comp_dir):
            continue
        print(f"=== {temp.upper()} ===")
        components = sorted(os.listdir(comp_dir))
        for comp in components:
            if not comp.endswith(".jsx"):
                continue
            filepath = os.path.join(comp_dir, comp)
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()
            # Find static text or elements that might need to be dynamic
            # Let's count approximate lines and see if we can read specific parts or just list the file names.
            print(f" - {comp} (size: {len(content)} bytes)")

if __name__ == "__main__":
    analyze_templates()
