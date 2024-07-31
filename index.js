const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let passOne = document.getElementById("pass-one")
let passTwo = document.getElementById("pass-two")

function generatePw() {
    console.clear()
    passOne.textContent = ""
    passTwo.textContent = ""
    console.log("Generating Passwords")
    randomize()
    passOne.textContent = passTwo.textContent
    checkPw()
    console.log("P1: " + passOne.textContent)
    console.log("P2: " + passTwo.textContent)
}

function randomize() {
    for (let i = 0; i < 16; i++) {
        let ranPass1 = Math.floor(Math.random()* characters.length)
        let ranPass2 = Math.floor(Math.random()* characters.length)
        passOne.textContent += characters[ranPass1]
        passTwo.textContent += characters[ranPass2]
    }
}

function checkPw() {
    console.log("Checking Passwords")
    if (passTwo.textContent === passOne.textContent) {
        console.log("Check Complete: True")
        passTwo.textContent = ""
        for (let i = 0; i < 16; i++) {
            ranPass2 = Math.floor(Math.random()* characters.length)
            passTwo.textContent += characters[ranPass2]
        }
        console.log("P2: New: " + passTwo.textContent)
    } else {
        console.log("Check Complete: False")
    }
}