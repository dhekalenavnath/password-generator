let charSet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '|', ';', ':', '"', ',', '.', '<', '>', '?', '/', '`', '~'
]
const copiedPass = document.getElementById("copied-pass");
const generatePassBtn = document.getElementById("generatepass");
const pass1El = document.getElementById("pass1-el");
const pass2El = document.getElementById("pass2-el");
const lengthSlider=document.getElementById("length-slider");
const lengthValue=document.getElementById("length-value");

lengthSlider.addEventListener("input",function(){
    lengthValue.textContent=lengthSlider.value
})

generatePassBtn.onclick = passGenerator

pass1El.addEventListener("click", copyToClipboard)
pass2El.addEventListener("click", copyToClipboard)

function passGenerator() {
    let pass1 = getRandomPassword()
    let pass2 = getRandomPassword()
    pass1El.innerText = pass1
    pass2El.textContent = pass2
}


function getRandomPassword() {
    let pass = "";
    for (let i = 0; i < lengthSlider.value; i += 1) {
        let rndnumindx = Math.floor(Math.random() * charSet.length)
        pass += charSet[rndnumindx]
    }
    return pass
}

function copyToClipboard(e) {
    let text = e.target.textContent.trim()
    if (!text) {
        return copiedPass.textContent = "⚠️ Generate a password first!"

    }
    navigator.clipboard.writeText(text);
    copiedPass.textContent = "✅ Copied: " + text

}
