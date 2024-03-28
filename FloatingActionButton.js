const fab = document.getElementById("fab");

fab.addEventListener("mousedown", (e) => {
    fab.setAttribute("data-clicked", true)
    
})

fab.addEventListener("mouseup", (e) => {
    fab.setAttribute("data-clicked", "")  
})