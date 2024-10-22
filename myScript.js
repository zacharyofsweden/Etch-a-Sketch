let clears = 0;

//Dom 
//TODO Refactor code so it all have seprete fucntions for readability. 
//May have to convert from string to int

//Ui
let promtText;
const body = document.querySelector("body")

const buttontest = document.createElement("button")
buttontest.className = "buttonTest"
buttontest.textContent = "Click Here to chose your grid size!"
body.appendChild(buttontest)

//Text

const textName = document.createElement("h1")
textName.textContent = " Etch A SKETCH"
body.appendChild(textName)



//grid System
const containerDiv = document.createElement("div")
containerDiv.className = "container"
body.appendChild(containerDiv)


//TODO Make sure you can only pick size one (Later on change so it updates every time)
//TODO Add limit of 100. 
buttontest.addEventListener("click", () => {


    //Promt the user for size of grid
    promtText = prompt("Type a number (Maximum 100)")

    //remove all things in container 
    if (clears >= 1) {
        clearScreen()
    }

    clears = clears + 1;
    console.log(clears)

    gridCreater()

  

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


function clearScreen() {
    const grids = document.querySelectorAll(".rowContainer")
    grids.forEach((grid) => {
        containerDiv.removeChild(grid)
    })

}



function gridCreater() 
{
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




function userInput()
{

}





