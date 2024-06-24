//Creating the variables for this function
let moreIsOn = false;
let printButtons = document.getElementById("more");

// The function
function more(close) {
    if (close !== "close") {
    if (moreIsOn == false) {
    //If more was disabled, enable it
        moreIsOn = true;
        // Print the buttons
        printButtons.style.visibility = "visible";
    }
    else {
    //Remove the buttons and turn off more
    moreIsOn = false;
    printButtons.style.visibility = "hidden";
    }
}
else {
        printButtons.style.visibility = "hidden";
 }
}