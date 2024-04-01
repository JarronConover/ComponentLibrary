let index = 0;

display();

function display() {
  let i;
  let album = document.getElementsByClassName("photo");
  for (i = 0; i < album.length; i++) {
    album[i].setAttribute("data-position", "out");
  }
  if (index >= album.length) {index = 0};
  album[index].setAttribute("data-position", "in")

  index++;
  setTimeout(display, 2000); 
}