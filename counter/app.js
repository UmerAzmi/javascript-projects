const decrementBtn = document.getElementById('decrement')
const incrementBtn = document.getElementById('increment')
const resetBtn = document.getElementById('reset')
const countVar = document.getElementById('counter')
let count = 0

incrementBtn.onclick = function() {
    count++;
    countVar.textContent = count;
}
decrementBtn.onclick = function() {
    count--;
    countVar.textContent = count;
}
resetBtn.onclick = function() {
    count = 0;
    countVar.textContent = count;
}