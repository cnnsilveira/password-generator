const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
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