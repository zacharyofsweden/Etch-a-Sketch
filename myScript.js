//Dom 
//TODO: Add input so user can chose size of grid.
//TODO: Make it so when user click it colors the square. (Permenantly)
//TODO: add text Minos Etch a sketch! 

const containerDiv = document.querySelector(".Container")

//for loop for making container 
for (let i = 1; i <= 16; i++) {
    const divRowContainer = document.createElement("div")
    divRowContainer.className = "rowContainer " + i;

    for (let i = 1; i <= 16; i++) {
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
    })
})

//TODO make it so you can left click to remove 