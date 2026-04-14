import re

path = 'c:/Users/MrX/OneDrive/Desktop/antigravity project/BacMatte-React/src/index.css'
with open(path, 'r', encoding='utf-8') as f:
    css = f.read()

vars_replacement = """
  --primary: #000b60;
  --primary-container: #142283;
  --primary-fixed: #dfe0ff;
  --secondary: #2b3363;
  --tertiary: #00201d;
  --tertiary-fixed: #84f5e8;
  
  --surface: #f7f9fb;
  --surface-container-low: #f2f4f6;
  --surface-container-lowest: #ffffff;
  
  --on-surface: #191c1e;
  --text: #191c1e;
  --text2: #5c5c61;
  --text3: #9b9ba4;
  
  --accent: var(--primary-container);
  --accent-bg: var(--primary-fixed);
  --accent-border: var(--primary);
  
  --border: rgba(198, 197, 212, 0.15);
  --border2: rgba(198, 197, 212, 0.4);
  --bg: var(--surface);
  --bg2: var(--surface-container-low);
  --bg3: var(--surface-container-low);
  
  --radius: 0.75rem;
  --radius-lg: 1.5rem;
  
  --shadow: 0 20px 40px rgba(0, 11, 96, 0.06);
  --shadow-lg: 0 40px 80px rgba(0, 11, 96, 0.08);
  --red: #dc3545;
  --red-light: #f8d7da;
"""
css = re.sub(r':root\s*\{[^}]+\}', ':root {\n' + vars_replacement + '\n}', css)

css = css.replace("font-family: 'Outfit', sans-serif;", "font-family: 'Plus Jakarta Sans', 'IBM Plex Sans Arabic', sans-serif;")
css = css.replace("font-family: 'Inter', sans-serif;", "font-family: 'Inter', 'IBM Plex Sans Arabic', sans-serif;")

btn_css = """
.btn {
  display: inline-flex; align-items: center; gap: 7px;
  font-size: 14px; font-weight: 600; padding: 12px 24px;
  border-radius: var(--radius-lg); border: none; cursor: pointer;
  font-family: inherit; transition: all .2s ease-out; text-decoration: none;
  white-space: nowrap;
}
.btn-primary { 
  background: linear-gradient(135deg, var(--primary), var(--primary-container)); 
  color: #ffffff; 
}
.btn-primary:hover { transform: translateY(-2px); box-shadow: var(--shadow); }
.btn-secondary { background: var(--surface-container-low); color: var(--primary); border: none; }
.btn-secondary:hover { background: var(--surface-container-low); transform: scale(1.02); }
.btn-outline { background: transparent; color: var(--on-surface); border: 2px solid var(--border2); }
.btn-outline:hover { background: var(--surface-container-low); }
"""
css = re.sub(r'\.btn\s*\{.*?\.btn-outline:hover\s*\{.*?\}', btn_css, css, flags=re.DOTALL)

css = css.replace('background: rgba(255,255,255,.93);', 'background: rgba(247,249,251, 0.4);')
css = css.replace('backdrop-filter: blur(12px);', 'backdrop-filter: blur(20px);')

with open(path, 'w', encoding='utf-8') as f:
    f.write(css)

print("CSS Overhaul Applied Successfully")
