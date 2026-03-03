const tempInput = document.getElementById("tempInput")
const toFahrenheit = document.getElementById("toFahrenheit")
const toCelsius = document.getElementById("toCelsius")
const output = document.getElementById("output")
let temp;

function convertTemperature(){

    if(!tempInput.value.trim()){
        output.textContent = 'Please Enter a Temperature'
    }
    else{    
        if(toFahrenheit.checked){
            temp = Number(tempInput.value);
            temp = (temp*9/5)+32 ;
            output.style.fontWeight= 'bold'
            output.textContent = temp.toFixed(1)+'°F'
        }
        else if(toCelsius.checked){
            temp = Number(tempInput.value);
            temp = (temp-32)*5/9 ;
            output.style.fontWeight= 'bold'
            output.textContent = temp.toFixed(1)+'°C'
        }
    }
}    

tempInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        convertTemperature();
    }
});