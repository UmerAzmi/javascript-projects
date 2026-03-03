const display = document.getElementById("display");

const baseFontSize = 5;  
const minFontSize = 1.5;

function adjustFontSize(){

    display.style.fontSize = baseFontSize + "rem";

    while (display.scrollWidth > display.clientWidth) {

        let currentSize = window.getComputedStyle(display).fontSize;
        currentSize = parseFloat(currentSize);

        if(currentSize <= (minFontSize * 16)) break;
        display.style.fontSize = (currentSize - 2) + "px";
    }
}

function appendToDisplay(input){
    display.value += input;
    adjustFontSize();
}

function clearDisplay(){
    display.value = "";
    adjustFontSize();
}

function backspace(){
    display.value = display.value.slice(0, -1);
    adjustFontSize();
}

function calculate(){
    try{
        display.value = eval(display.value);
        adjustFontSize();
    }
    catch(error){
        display.value = "Error";
        adjustFontSize();
        setTimeout(clearDisplay, 1000);
    }
}
