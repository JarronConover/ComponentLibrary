const spinner = document.getElementById("spinnerPersonal");

spinner.addEventListener("click", (e) => {
    spinner.setAttribute("data-clicked", true)
    setTimeout(unclicked, 1000)
    
})

function unclicked() {
    spinner.setAttribute("data-clicked", false)
}