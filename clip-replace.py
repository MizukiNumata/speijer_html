import pyperclip
import time

# 1sec毎に監視
time.sleep(1)

# 置換される/する単語を辞書型で準備
tag_dict = {
    "A": 'ā',
    "I": 'ī',
    "U": 'ū',
    "R": 'ṛ',
    "RR": 'ṝ',
    "lR": 'ḷ',
    "lRR": 'ḹ',
    "M": 'ṃ',
    "H": 'ḥ',
    "G": 'ṅ',
    "J": 'ñ',
    "T": 'ṭ',
    "N": 'ṇ',
    "z": 'ś',
    "S": 'ṣ',
}

text = ""

# クリップボードの文字列を変数’text’に保存
text = str(pyperclip.paste())

# 文字列の置換
for tag in tag_dict.keys():
    text = text.replace(tag, tag_dict[tag])

# 置換後の文字列をクリップボードにコピー
pyperclip.copy(text)
