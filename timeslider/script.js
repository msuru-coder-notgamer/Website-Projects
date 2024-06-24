const printHere = document.getElementById("num");
const printHere2 = document.getElementById("png");
let value;

function slider(num) {


function stuff(num) {

 if (num < 9) {
 return "Morning, rise and shine!";
 }
 else if (num < 12) {
   return "Day";
 }
 else if (num < 15) {
   return "Afternoon";
 } 
 else if (num < 18) {
   return "Evening";
 } 
  else {
   return "Night time";
 } 
}


function pics() {
if (num < 9) {
return "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Morning%2C_just_after_sunrise%2C_Namibia.jpg/280px-Morning%2C_just_after_sunrise%2C_Namibia.jpg'>";
}
else if (num < 12) {
  return "<img src='https://wallpaperaccess.com/full/2107738.jpg'>";
 }
 else if (num < 15) {
   return "<img src='https://wallpapercave.com/wp/wp2214820.jpg'>";
 }
 else if (num < 18) {
   return "<img src='https://th.bing.com/th/id/R.67fefe08081b7226de30f0321183609a?rik=zMt4EfB1Dl0Bqg&pid=ImgRaw&r=0'>";
 }
 else {
   return "<img src='https://th.bing.com/th/id/OIP.PqbPKm9TRyKtHoQ9Z9YXSwHaEo?rs=1&pid=ImgDetMain'>";
 }
} 


printHere.innerHTML = stuff(num) + ", the time is " + num + ":00";
printHere2.innerHTML = pics();

}