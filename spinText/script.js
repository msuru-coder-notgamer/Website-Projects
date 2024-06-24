const spin = document.getElementById("spinnable");
let currentRotation = 0;
function spinText(_value) {
  currentRotation = _value;
  spin.style = `transform: rotate(${currentRotation}turn)`;
}