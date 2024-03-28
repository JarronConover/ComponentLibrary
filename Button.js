const button = document.getElementById("button");

button.addEventListener("mousedown", (e) => {
    button.setAttribute("data-clicked", true)   
})

button.addEventListener("mouseup", (e) => {
    button.setAttribute("data-clicked", "")  
})