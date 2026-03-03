let minNumber = 1;
let maxNumber;
let answer;  
let tries = 0;
let running = true;
let result = document.getElementById('result');

function setDifficulty() {
    let difficulty = document.getElementById('diff').value;

    if (!difficulty || difficulty === '' || difficulty < 1 || difficulty > 5) {
    alert('Please select a valid difficulty level between 1-5!');
    return; // Exit the function early
    }

    if (difficulty == 1) {
        maxNumber = 10;
    } else if (difficulty == 2) {
        maxNumber = 50;
    } else if (difficulty == 3) {
        maxNumber = 100;
    } else if (difficulty == 4) {
        maxNumber = 500;
    } else if (difficulty == 5) {
        maxNumber = 1000;
    }
    
    document.getElementById('pTag').textContent = `Guess a number between ${minNumber} and ${maxNumber}.`;
    answer = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    
    tries = 0;
    running = true;
    result.textContent = '';

    document.getElementById('guessingSection').style.display = 'block';
    document.getElementById('diffultySection').style.display = 'none';
}

document.getElementById('startBtn').onclick = setDifficulty;
document.getElementById('diff').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        setDifficulty();
    }
});

function checkGuess() {
    if (!running) {
        result.textContent = 'Game over! Click Reset to play again.';
        return;
    }

    let guess = Number(document.getElementById('guess').value);

    if (isNaN(guess)) {
        result.textContent = 'Please enter a valid number';
    }
    else if (guess < minNumber || guess > maxNumber) {
        result.textContent = 'Please guess a number within the range';
    }
    else {
        tries++;
        if (guess > answer) {
            result.textContent = `Too high! Guess Lower!`;
            document.getElementById('try').textContent = `Attempt #${tries}`;
        }
        else if (guess < answer) {
            result.textContent = `Too low! Guess Higher!`;
            document.getElementById('try').textContent = `Attempt #${tries}`;
        }
        else {
            result.textContent = `🎉 Congratulations! The answer was ${answer}. You guessed it in ${tries} attempts!`;
            document.getElementById('try').style.display = 'none';
            running = false;
        }
    }
}

document.getElementById('guessBtn').onclick = checkGuess;
document.getElementById('guess').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});

document.getElementById('resetBtn').onclick = function() {
  location.reload();
};