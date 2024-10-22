//GlovalVariabals
let clears = 0;
let promtText;

//Creating Dom
const body = document.querySelector("body")

const UserGridInputButton = document.createElement("button")
UserGridInputButton.className = "buttonTest"
UserGridInputButton.textContent = "Click Here to chose your grid size!"
body.appendChild(UserGridInputButton)

//Text

const textName = document.createElement("h1")
textName.textContent = " Etch A SKETCH"
body.appendChild(textName)


//grid System
const containerDiv = document.createElement("div")
containerDiv.className = "container"
body.appendChild(containerDiv)


//TODO Add limit of 100. 
UserGridInputButton.addEventListener("click", () => {
    //Promt the user for size of grid
    promtText = prompt("Type a number (Maximum 100)")
    if (promtText < 100) {
        console.log("Within range")

    }
    else {
        promtText = 100;
    }
    console.log(promtText)
    //remove all things in container 
    clearScreen()


    gridCreater()

    userInput()

    clears++;
})

//Functions




function gridCreater() {
    //Creates the grid
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
}




function userInput() {
    //Add event listernes to all block
    //Make it so you can add color
    const blocks = document.querySelectorAll(".block");
    blocks.forEach((block) => {
        block.addEventListener("click", function (e) {
            block.setAttribute("style", "background: red;")
            console.log("Working!")
        })
    })
}

//TODO make it so you can left click to remove 


function clearScreen() {
    const grids = document.querySelectorAll(".rowContainer")
    if (clears >= 1) {
        grids.forEach((grid) => {
            containerDiv.removeChild(grid)
        })
    }


}





