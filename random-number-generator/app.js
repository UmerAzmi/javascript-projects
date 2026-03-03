const rollNo1 = document.getElementById('roll1')
const rollNo2 = document.getElementById('roll2')
const rollBtn = document.getElementById('button')

const min = 1
const max = 6
let randomNo1
let randomNo2

rollBtn.onclick = function(){
    randomNo1 = Math.floor(Math.random() * (max - min + 1)) + min
    randomNo2 = Math.floor(Math.random() * (max - min + 1)) + min
    rollNo1.textContent = randomNo1
    rollNo2.textContent = randomNo2
    rollNo1.style.display = 'block'
    rollNo2.style.display = 'block'    
}