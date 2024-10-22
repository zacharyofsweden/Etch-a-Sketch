//Dom 
//TODO: add text Minos Etch a sketch! 
//TODO Refactor code so it all have seprete fucntions for readability. 
//May have to convert from string to int

//Ui
let promtText;
const body = document.querySelector("body")

const buttontest = document.createElement("button")
buttontest.className = "buttonTest"
buttontest.textContent = "Test"
body.appendChild(buttontest)

//Text



//grid System
const containerDiv = document.querySelector(".Container")
//TODO Make sure you can only pick size one (Later on change so it updates every time)
//TODO Add limit of 100. 
buttontest.addEventListener("click", () => {
    //Promt the user for size of grid
    promtText = prompt("Working!")

    //For loop that creates the grid
    for (let i = 1; i <= promtText; i++) {
        const divRowContainer = document.createElement("div")
        divRowContainer.className = "rowContainer " + i;

        for (let i = 1; i <= promtText; i++) {
            const div = document.createElement("div")
            divRowContainer.appendChild(div)
            div.className = "block " + i;
            console.log("Added " + i)
        }
        console.log("Added container" + i)
        containerDiv.appendChild(divRowContainer)
    }
    //Event Listiners

    //Add event listernes to all block
    //Make it so you can add color
    const blocks = document.querySelectorAll(".block");
    blocks.forEach((block) => {
        block.addEventListener("click", function (e) {
            block.setAttribute("style", "background: red;")
            console.log("Working!")
        })
    })

    //TODO make it so you can left click to remove 
})














