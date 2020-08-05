// indexの言語切替処理

let currentLang = "eng";

// js側の""に干渉するため、html内の""はエスケープすること
// " ` "を使ったのでやらんでヨシ
function chgLang() {
  if (currentLang == "eng") {
    document.getElementById("enIndex").innerHTML = `
    <a href="article/000_intro.html" target="viewer">Kernによるまえがき</a><br>
    <a href="article/000_pref.html" target="viewer">序文</a><br>
    `;
    currentLang = "ja";
  } else {
    document.getElementById("enIndex").innerHTML = `
    <a href="article/000_intro.html" target="viewer">Introduction by Kern</a><br>
    <a href="article/000_pref.html" target="viewer">Preface</a><br>
    `;
    currentLang = "eng";
  }
}
