const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const domLetters = document.querySelector("#letters");
const domNumbers = document.querySelector("#numbers");
const domSymbols = document.querySelector("#symbols");

const firstPw  = document.querySelector("#first-pw");
const secondPw = document.querySelector("#second-pw");
const copyText = document.querySelector(".copy-text");
const pwLength = document.querySelector("#length");
const domError = document.querySelector("#error");

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
    firstPw.textContent  = "";
    secondPw.textContent = "";
    copyText.textContent = "";
    firstPw.style = secondPw.style = "cursor: initial";

    if (!domLetters.checked && !domNumbers.checked && !domSymbols.checked) {
        domError.textContent = "Your password must contain at least one type of character.";

    } else if (pwLength.value < 8 || pwLength.value > 20) {
        domError.textContent = "Enter a valid number for the password length (8 - 20).";

    } else {
        domError.textContent = "";
        firstPw.textContent  = "";
        secondPw.textContent = "";
    
        let characters = [];
        characters = toggleCheck(domLetters, characters, letters);
        characters = toggleCheck(domNumbers, characters, numbers);
        characters = toggleCheck(domSymbols, characters, symbols);
    
        for (let i = 0; i < pwLength.value; i++) {
            randomizer(firstPw, characters);
            randomizer(secondPw, characters);
        }
    
        copyText.textContent = "Click to copy!";
        firstPw.style = secondPw.style = "cursor: pointer";
    }
}

function copyOnClick(element) {
    if (element.textContent.length != 0) {
        navigator.clipboard.writeText(element.textContent);
        copyText.textContent = "Password copied successfully!";
    }
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