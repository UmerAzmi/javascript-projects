function generatePassword(passLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(passLength <= 0 || isNaN(passLength)){
        return "(Enter a valid password length)";
    }

    if(allowedChars.length === 0){
        return "(Select at least one character type)";
    }

    for(let i = 0; i < passLength; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const output = document.getElementById("passwordOutput");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");


function click(){

    const passLength = Number(document.getElementById("length").value);
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;

    const password = generatePassword(
        passLength,
        includeLowercase,
        includeUppercase,
        includeNumbers,
        includeSymbols
    );

    output.textContent = password;
}

generateBtn.addEventListener("click", click);

document.getElementById("length").addEventListener("keydown", function(event){
    if(event.key==='Enter'){
        click();
    }
});




// ===== COPY BUTTON =====

copyBtn.addEventListener("click", function(){

    const password = output.textContent;

    // prevent copying messages
    if(password.includes("(")){
        copyBtn.textContent = "Nothing to copy";
        setTimeout(() => {
            copyBtn.textContent = "Copy";
        }, 1200);
        return;
    }

    navigator.clipboard.writeText(password);

    copyBtn.textContent = "Copied!";
    setTimeout(() => {
        copyBtn.textContent = "Copy";
    }, 1200);
});
