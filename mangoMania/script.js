const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
function imgSpin() {

 img1.style.transform = "translateY(-60px) translateX(-42px)";
 img2.style.transform = "translateY(-100px) translateX(73px)";

 setTimeout(function() {
 img1.style.transform += "rotate(0.13turn)";
 }, 70);

 setTimeout(function() {
 img2.style.transform += "rotate(0.18turn)";
 }, 90);

 setTimeout(function() {
img1.style.zIndex = "4";
img2.style.zIndex = "4";
 }, 25);

}

function imgOut() {

img1.style.zIndex= "1";
img2.style.zIndex = "1";

 img1.style.transform = "translateX(-50px)";
 img2.style.transform = "translateY(-35px) translateX(50px)";

 setTimeout(function() {
 img1.style.transform += "rotate(0turn)";
 }, 70);

 setTimeout(function() {
 img2.style.transform += "rotate(0turn)";
 }, 90);

}

function imgMore() {
  let test = document.createElement("img");
  test.src = "https://purepng.com/public/uploads/large/purepng.com-ripe-mangofruitsmangodrupe-981525183079bo3wz.png";
  test.width = 60;
  document.body.appendChild(test);
}