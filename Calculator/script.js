//The variables required
let question = "";
let answer;
let adv = "";
let specialAdv = false;
let bracket = 0;
let slicedQuestion;

//Finding the number so it can be printed onto the screen
const print = document.getElementById("answer");

//Creating the functions

function sym(symbolPressed) {
 question += symbolPressed;
 print.innerHTML += symbolPressed;
}

function num(numberPressed) {
  question += numberPressed;
  if (print.innerHTML == "0") {
    print.innerHTML = numberPressed;
  }
  else {
  print.innerHTML += numberPressed;
 }
 if (question.length > 12) {print.style.fontSize = "35px";}
}


function equals() {
    if (specialAdv == false) {
    answer = eval(question);
    }
    else {
    answer = `Math.${adv}(${question});`;
        answer = eval(answer);
        }
    specialAdv = false;
    print.innerHTML = answer;
    question = answer;
    if (answer.toString().length > 12) {print.style.fontSize = "35px";}
}


function brackets() {
  bracket++;
  if (bracket == 1) {
    question += "(";
  print.innerHTML += "(";
  }
  else if (bracket == 2) {
    question += ")";
   print.innerHTML += ")";
  bracket = 0;
  }
}


function c() {
  question = "";
  print.innerHTML = "0";
    print.style.fontSize = "50px";
}


function del() {
  question =  question.slice(0, -1);
  
  if (specialAdv) { 
      if (question == "") {
      print.innerHTML = "";
  } 
  else {
      print.innerHTML = adv;
      print.innerHTML += question;
  }
 }
  else {
  print.innerHTML = question;
  }
  
  if (print.innerHTML == "") {
    print.innerHTML = "0";
  }
    if (question.length < 13) {
    print.style.fontSize = "50px";
    }
}


// Advanced functions

function advanced(advancedFunction) {
    if (advancedFunction == "pi") { adv = "3.141"; question += adv; }
    else if (advancedFunction == "e") { adv = "2.718"; question += adv; }
    else {adv = advancedFunction; specialAdv = true}
    
    if (print.innerHTML == "0") {
        print.innerHTML = adv;
    }
    else {
          print.innerHTML += adv;
    }
}