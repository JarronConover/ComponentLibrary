let isNavOpen = false;
const navdrawer = document.getElementById("navdrawer");

document.getElementById("navbutton").addEventListener("click", (e) => {
    isNavOpen = !isNavOpen;
    navdrawer.dataset.open = `${isNavOpen}`;
});