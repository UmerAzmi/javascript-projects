function rollDice(){
    const numDices = document.getElementById('numDices').value
    const diceNum = document.getElementById('diceNum')
    const diceImg = document.getElementById('diceImg')
    let values = []
    let images = []

    for(let i = 0; i < numDices; i++){
        let value = Math.floor(Math.random() * 6) + 1
        values.push(value)
        images.push(`<img src="img/${value}.png"/>`)
    }    

    document.getElementById('diceTxt').textContent = `Dice Values`
    diceNum.textContent = `${values.join(', ')}`
    diceImg.innerHTML = images.join('')

    console.log(images)
}

document.getElementById('numDices').addEventListener('keydown',function(event){
    if(event.key === 'Enter'){
        rollDice()
    }
})