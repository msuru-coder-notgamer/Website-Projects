let i = 0;
const moveThis = document.getElementById("moveThis");
function moveRNG() {
  i = Math.floor(Math.random() * 200);
  moveThis.style = `transform: translateY(${i}px)`;
}
function moveSetVar(_value) {
  i = _value;
  moveThis.style = `transform: translateY(${i}px)`;
}