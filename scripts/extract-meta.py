import re

for f in ['.tmp-page1.html', '.tmp-page2.html', '.tmp-page3.html']:
    html = open(f, encoding='utf-8', errors='ignore').read()
    title = re.search(r'<title>(.*?)</title>', html, re.S)
    desc = re.search(r'<meta name="description" content="(.*?)"', html, re.S)
    print('===', f)
    print('TITLE:', title.group(1) if title else None)
    print('DESC:', desc.group(1)[:220] if desc else None)
    print()
