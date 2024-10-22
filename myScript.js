//Dom 

//figure out how to acces all the children of container in css


const containerDiv = document.querySelector(".Container")
//this is the first row then we will do this 16 times on the other axis using flex box verical and horizantal 
//Creates 16 divs and adds them to the container
//create a container for 16 then append tp main container and do that 16 times
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
    console.log("Added container"+ i)
    containerDiv.appendChild(divRowContainer)
}


//Appending 
