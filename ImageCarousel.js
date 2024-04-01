const photo1 = document.getElementById("photo1");
const photo2 = document.getElementById("photo2");
const photo3 = document.getElementById("photo3");
const photo4 = document.getElementById("photo4");

let photos = document.getElementsByClassName("photo");

const carousel = document.getElementById("carousel");

setInterval(rotate, 2000);

let count = 0;

// while (photos.length !== 0){
//     for(i=0; i<photos.length; i++){
//         photos[i].style.display = "none"
//     }
//     if (count > photos.length) {count = 0;};
//     photos[count].style.display = "block";
// }

function rotate(){
    photo1.setAttribute("data-attribute", true)
    console.log("fire")
    setTimeout(reset, 1000)
}

function reset(){
    photo1.setAttribute("data-attribute", false)
}
