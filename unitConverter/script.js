let inputValue = 10;
let milesToKm = "true";
let result = 0;
const resultElement = document.getElementById("resultElement");
function convert() {
if (milesToKm == "true") {
  result = inputValue * 1.60934;
} else {
  result = inputValue / 1.60934;
}
let resultString;
if (milesToKm == "true") {
resultString = "Result:" + inputValue + " miles are " + result + " km";
}
else {
  resultString = "Result:" + inputValue + " kilometers are " + result + " miles";
}
  
resultElement.innerHTML = resultString;
}