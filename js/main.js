const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const domLetters = document.getElementById("letters");
const domNumbers = document.getElementById("numbers");
const domSymbols = document.getElementById("symbols");

const firstPw  = document.getElementById("first-pw");
const secondPw = document.getElementById("second-pw");
const pwLength = document.getElementById("length");
const domMessage = document.getElementById("msg");

function toggleCheck(condition, array, secondArray) {
    if (condition.checked) {
        array = array.concat(secondArray);
    }
    return array;
}

function randomizer(element, array) {
    let number = Math.floor(Math.random() * array.length);
    element.textContent += array[number];
}

function generatePw() {
    console.log(pwLength.value);
    domMessage.textContent = "";
    firstPw.textContent  = "";
    secondPw.textContent = "";
    firstPw.style = secondPw.style = "cursor: initial";

    if (!domLetters.checked && !domNumbers.checked && !domSymbols.checked) {
        domMessage.textContent = "Your password must contain at least one type of character.";
        domMessage.classList.add('error');

    } else if (pwLength.value < 1 || pwLength.value > 20) {
        domMessage.textContent = "Enter a valid number for the password length (8 - 20).";
        domMessage.classList.add('error');

    } else {
        domMessage.classList.remove('error');
        domMessage.classList.remove('success');
        domMessage.textContent = "Choose a password and click it to copy!";
        let characters = [];
        characters = toggleCheck(domLetters, characters, letters);
        characters = toggleCheck(domNumbers, characters, numbers);
        characters = toggleCheck(domSymbols, characters, symbols);

        for (let i = 0; i < pwLength.value; i++) {
            randomizer(firstPw, characters);
            randomizer(secondPw, characters);
        }

        firstPw.style = secondPw.style = "cursor: pointer";
    }
}

function copyOnClick(element) {
    if (element.textContent.length != 0) {
        navigator.clipboard.writeText(element.textContent);
    }
    domMessage.textContent = "Password copied successfully!";
    domMessage.classList.add('success');
}

/*

Old code to compare

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
"N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e",
"f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
"x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`",
"!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",
",","|",":",";","<",">",".","?","/"];

let firstPw = document.querySelector("#first-pw")
let secondPw = document.querySelector("#second-pw")

function generatePw() {
    firstPw.textContent = ""
    secondPw.textContent = ""
    for (let i = 0; i < 16; i++) {
        firstRandom = Math.floor(Math.random() * characters.length)
        secondRandom = Math.floor(Math.random() * characters.length)
        firstPw.textContent += characters[firstRandom]
        secondPw.textContent += characters[secondRandom]
    }
}

*/