const htmlInp = document.getElementById("htmlInp");
const htmlbutton = document.getElementById("htmlbutton")
const cssInp = document.getElementById("cssInp");
const cssbutton = document.getElementById("cssbutton")
const jsInp = document.getElementById("jsInp");
const jsbutton = document.getElementById("jsbutton")
const out = document.getElementById("output");
let i = 1

function upd() {
  const htmlInput = htmlInp.value;
  const cssInput = "<style>" + cssInp.value + "</style>";
  const jsInput = "<script>" + jsInp.value + "</script>";
  out.srcdoc = htmlInput + cssInput + jsInput;
}

upd()

function html() {
  htmlbutton.style.backgroundColor = "rgb(72, 72, 72)"
  cssbutton.style.backgroundColor = ""
  jsbutton.style.backgroundColor = ""

  htmlInp.style.visibility = "visible"
  cssInp.style.visibility = "hidden"
  jsInp.style.visibility = "hidden"
}

html()

function css() {
  htmlbutton.style.backgroundColor = ""
  cssbutton.style.backgroundColor = "rgb(72, 72, 72)"
  jsbutton.style.backgroundColor = ""

  htmlInp.style.visibility = "hidden"
  cssInp.style.visibility = "visible"
  jsInp.style.visibility = "hidden"
}

function js() {
  htmlbutton.style.backgroundColor = ""
  cssbutton.style.backgroundColor = ""
  jsbutton.style.backgroundColor = "rgb(72, 72, 72)"

  htmlInp.style.visibility = "hidden"
  cssInp.style.visibility = "hidden"
  jsInp.style.visibility = "visible"
}

function full() {
  console.log(i)
  if (i == 1) {
    out.style.width = "216vh"
    out.style.height = "99.6vh"
    i = 0
  } else {
    out.style.width = "400px"
    out.style.height = "250px"
    i = 1
  }
}