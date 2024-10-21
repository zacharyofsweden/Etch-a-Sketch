//Dom 



const containerDiv = document.querySelector(".Container")
//this is the first row then we will do this 16 times on the other axis using flex box verical and horizantal 
//Creates 16 divs and adds them to the container
for (let i = 1; i <= 16; i++) 
{
    const div = document.createElement("div")
    containerDiv.appendChild(div)
    div.className = "block " + i;
    console.log("Added " + i)
}

//Appending 
