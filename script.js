const textInput = document.querySelector("#text_input");
var display = document.querySelector("#display");
const randoBtn = document.querySelector("#rando_btn");

var displayText = ["Name", "Age", "height"];

//After enter is pressed in the text input, update displayText list
textInput.addEventListener("keydown", (event) => {
    if(event.key == "Enter"){
        if(textInput.value !== null){
            displayText.push(textInput.value)
        }
        console.log(displayText);
        displayArea(displayText);
    }
});

//Clear the display and display updated text
function displayArea(displayText) {
    display.innerHTML = "";
    for(let i = 0; i < displayText.length; i++) {
        display.innerHTML += 
        `
        ${displayText[i]} </br>
        `
    }
}
displayArea(displayText);
