const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let createPw = document.querySelector("#create-pw")
console.log("Create PW: " + createPw.classList)
let passOne = document.getElementById("pass-one")
let passTwo = document.getElementById("pass-two")
let toolTip = document.getElementById("tool-tip")

function generatePw() {
    console.clear()
    createPw.classList.remove("hidden") // Comment out createPW
    passOne.classList.remove("copied")
    passTwo.classList.remove("copied")
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

// Add Event Listener instead of onClick

// passOne.addEventListener("click", copy())
// passTwo.addEventListener("click", copy())

function copyOne() {
    let copyOne = document.getElementById("pass-one")
    // Copy text
    navigator.clipboard.writeText(copyOne.textContent)
    console.log("Copied: " + copyOne.textContent)
    copyOne.classList.add("copied")
    toolTip.textContent = "Copied"
    setTimeout(() => {
        copyOne.classList.remove("copied")
        toolTip.textContent = "Click to Copy Password"
    }, 1500);
}

function copyTwo() {
    let copyTwo = document.getElementById("pass-two")
    // Copy text
    navigator.clipboard.writeText(copyTwo.textContent)
    console.log("Copied: " + copyTwo.textContent)
    copyTwo.classList.add("copied")
    toolTip.textContent = "Copied"
    setTimeout(() => {
        copyTwo.classList.remove("copied")
        toolTip.textContent = "Click to Copy Password"
    }, 1500);
}