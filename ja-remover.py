import glob
from bs4 import BeautifulSoup


files = glob.glob('/article_nodir/*')

for file_name in files:
    with open(file_name, mode='rt', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html5lib')

    soup.find('div', lang='ja').decompose()
