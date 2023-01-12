const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let firstPw  = document.querySelector("#first-pw");
let secondPw = document.querySelector("#second-pw");
let copyText = document.querySelector(".copy-text");

function toggleCheck(condition, array, secondArray) {
    if (condition) {
        array = array.concat(secondArray);
    }
    return array;
}

function checkedCheck(condition) {
    if (condition.checked) {
        return true;
    } else {
        return false;
    }
}

function randomizer(element, array) {
    let number = Math.floor(Math.random() * array.length);
    element.textContent += array[number];
}

function generatePw() {
    firstPw.textContent  = "";
    secondPw.textContent = "";

    let characters = [];
    characters = characters.concat(letters);
    characters = toggleCheck(checkedCheck(document.querySelector("#numbers")), characters, numbers);
    characters = toggleCheck(checkedCheck(document.querySelector("#symbols")), characters, symbols);

    for (let i = 0; i <= document.querySelector("#length").value; i++) {
        randomizer(firstPw, characters);
        randomizer(secondPw, characters);
    }

    copyText.textContent = "Click at the password to copy!";
    firstPw.style = secondPw.style = "cursor: pointer";
}

function copyOnClick(element) {
    if (element.textContent.length != 0) {
        navigator.clipboard.writeText(element.textContent);
        copyText.textContent = "Password copied successfully!";
    }
}

/*
to do:
checkbox and number style

--

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