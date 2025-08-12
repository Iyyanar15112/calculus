let firstNumber = "";
let SecondNumber = "";
let operator = "";

// Load sound file
let clickSound = new Audio("menu-button-88360.mp3");

function playSound() {
    clickSound.currentTime = 0; // restart if already playing
    clickSound.play();
}
function playSound(buttonElement) {
    clickSound.currentTime = 0;
    clickSound.play();

    // Add shake animation
    buttonElement.classList.add("shake");
    setTimeout(() => {
        buttonElement.classList.remove("shake");
    }, 300);
}

function append(number, btn){
    playSound(btn);
    if(operator===""){
        firstNumber+=number;
        document.getElementById('res').value=firstNumber;
    } else {
        SecondNumber+=number;
        document.getElementById('res').value=firstNumber+operator+SecondNumber;
    }
}

function operate(op, btn){
    playSound(btn);
    operator=op;
    document.getElementById('res').value=firstNumber+operator;
}

function calculate(btn){
    playSound(btn);
    let result;
    switch(operator){
        case '+': result = parseInt(firstNumber) + parseInt(SecondNumber); break;
        case '-': result = parseInt(firstNumber) - parseInt(SecondNumber); break;
        case '*': result = parseInt(firstNumber) * parseInt(SecondNumber); break;
        case '/': result = parseInt(firstNumber) / parseInt(SecondNumber); break;
    }
    document.getElementById('res').value = result;
}

function clearresult(btn){
    playSound(btn);
    firstNumber="";
    SecondNumber="";
    operator="";
    document.getElementById('res').value="";
}
