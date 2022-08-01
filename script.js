const textInput = document.querySelector("#text_input");
var display = document.querySelector("#display");
const randoBtn = document.querySelector("#rando_btn");

var displayText = [];

//After enter is pressed in the text input, update displayText list
textInput.addEventListener("keydown", (event) => {
    if(event.key == "Enter"){
        if(textInput.value !== ""){
            displayText.push(textInput.value)
        }
        textInput.value = "";
        Refresh(displayText);
    }
});

//Clear the display and display updated text
function Refresh(displayText) {
    display.innerHTML = "";
    for(let i = 0; i < displayText.length; i++) {
        display.innerHTML += 
        `
        ${displayText[i]} </br>
        `
    }
}
Refresh(displayText);

randoBtn.addEventListener("click", () => {
    let num = displayText.length;
    if(num == 0){
        alert("Enter some text first!")
    } else {
        alert(displayText[Math.floor(Math.random() * num)]);
    }
})