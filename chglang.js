// indexの言語切替処理

let currentLang = "en";
document.getElementById("enIndex").style.display = "block";
document.getElementById("jaIndex").style.display = "none";

function chgLang() {
  if (currentLang == "en") {
    document.getElementById("enIndex").style.display = "none";
    document.getElementById("jaIndex").style.display = "block";
    currentLang = "ja";
  } else {
    document.getElementById("jaIndex").style.display = "none";
    document.getElementById("enIndex").style.display = "block";
    currentLang = "en";
  }
}
