document.getElementById("navbar-html").innerText = 
`<nav id="navbar">
    <button id="navbutton">
        <span class="material-symbols-outlined">menu</span>
    </button>
    <span id="title">Spin Up</span>
    <button class="link">Page 1</button>
    <button class="link">Page 2</button>
    <button class="link">Page 3</button>
    <button class="link">Page 4</button>
</nav>`;

document.getElementById("navbar-css").innerText = 
`:root{
    --primary : #344e41;
    --secondary : #3a5a40;
    --tertiary : #588157; 
    --light : #dad7cd;
    --contrast : #a3b18a;
}

#navbar{
    margin: 0;
    padding: 4px;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 8px;
    background-color: var(--primary);
    color: var(--light) ;
    position: fixed; top: 0; left: 0; right: 0; 
}
#navbutton{
    background-color: var(--primary);
    padding: 16px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--light);
    cursor: pointer;
}
#navbutton:hover{
    color: white;
}

#title{
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.5em;
}

.link{
    background-color: var(--primary);
    padding: 16px;
    min-width: 64px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--light);
    cursor: pointer;
}
.link:hover{
    color: white;
}`;

document.getElementById("navdrawer-html").innerText = 
`<nav id="navbar">
    <button id="navbutton">
        <span class="material-symbols-outlined">menu</span>
    </button>
</nav>
<nav id="navdrawer" data-open="">
    <a class="drawer"><span class="material-symbols-outlined">deployed_code </span>Cube</a>
    <a class="drawer"><span class="material-symbols-outlined">mail</span>Mail </a>
    <a class="drawer"><span class="material-symbols-outlined">settings</span>Settings </a>
    <a class="drawer"><span class="material-symbols-outlined">logout</span>Logout </a>
</nav>`;

document.getElementById("navdrawer-css").innerText = 
`:root{
    --primary : #344e41;
    --secondary : #3a5a40;
    --tertiary : #588157; 
    --light : #dad7cd;
    --contrast : #a3b18a;
}

#navdrawer{
    position: fixed;
    top: 64px;
    left: -310;
    bottom: 0;
    width: 300px;
    background-color: var(--contrast);
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    transition: all .3s ease;
}

#navdrawer[data-open="true"]{
    left: 0px;
}

.drawer{
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    gap: 8px;
    color: black;
}

.drawer:hover{
    color: var(--light);
}

#navbar{
    margin: 0;
    padding: 4px;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 8px;
    background-color: var(--primary);
    color: var(--light) ;
    position: fixed; top: 0; left: 0; right: 0;
}
#navbutton{
    background-color: var(--primary);
    padding: 16px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--light);
    cursor: pointer;
}
#navbutton:hover{
    color: white;
}

`;

document.getElementById("navdrawer-js").innerText = 
`let isNavOpen = false;
const navdrawer = document.getElementById("navdrawer");

document.getElementById("navbutton").addEventListener("click", (e) => {
    isNavOpen = !isNavOpen;
    navdrawer.dataset.open = `/*${isNavOpen} (uncomment this part of the code*/+`;
});`;

document.getElementById("button-html").innerText = 
`<div>
    <button class="material-symbols-outlined" id="button" data-clicked="">search</button>
</div>`;

document.getElementById("button-css").innerText = 
`:root{
    --primary : #344e41;
    --secondary : #3a5a40;
    --tertiary : #588157; 
    --light : #dad7cd;
    --contrast : #a3b18a;
}

#button{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 32px;
    padding: 16px 32px;

    font-size: 1rem;
    font-weight: 500;
    background-color: var(--contrast);
    color: var(--primary);
    border: none;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    transition: background-color .3s ease;
    gap: 8px;
}

#button:hover{
    background-color: var(--light);
}

#button[data-clicked="true"]{
    box-shadow: none;
}
`;

document.getElementById("button-js").innerText = 
`const button = document.getElementById("button");

button.addEventListener("mousedown", (e) => {
    button.setAttribute("data-clicked", true)   
})

button.addEventListener("mouseup", (e) => {
    button.setAttribute("data-clicked", "")  
})`;

document.getElementById("fab-html").innerText = 
`<div>
    <button class="material-symbols-outlined" id="fab" data-clicked="">home</button>
</div>  `;

document.getElementById("fab-css").innerText = 
`:root{
    --primary : #344e41;
    --secondary : #3a5a40;
    --tertiary : #588157; 
    --light : #dad7cd;
    --contrast : #a3b18a;
}

html{
    margin: 16px;
}

#fab{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 32px;
    padding: 20px;
    background-color: var(--contrast);
    color: var(--primary);
    border: none;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    transition: background-color .3s ease;
    position: relative; /*in notes set position: fixed; bottom: 24px; right: 24px;*/
}

#fab:hover{
    background-color: var(--light);
}

#fab[data-clicked="true"]{
    box-shadow: none;
}`;

document.getElementById("fab-js").innerText = 
`const fab = document.getElementById("fab");

fab.addEventListener("mousedown", (e) => {
    fab.setAttribute("data-clicked", true)
    
})

fab.addEventListener("mouseup", (e) => {
    fab.setAttribute("data-clicked", "")  
})`;

document.getElementById("carousel-html").innerText = 
``;

document.getElementById("carousel-css").innerText = 
``;

document.getElementById("carousel-js").innerText = 
``;

document.getElementById("spinner-html").innerText = 
`<div id="spinnerDiv">
    <div  id="spinnerPersonal" data-clicked="false" >
        <img class="image" id="SteamBoatWillie" src="SteamBoatWillie.jpg" alt="black">
    </div>
</div>
<div id="spinnerDiv">
    <div id="spinnerText"  >LOADING</div>
</div>
<div id="spinnerDiv">
    <div class="dotSpinner" id="spinnerFirst"></div>
    <div class="dotSpinner" id="spinnerMiddle"></div>
    <div class="dotSpinner" id="spinnerLast"></div>
</div>`;

document.getElementById("spinner-css").innerText = 
`:root{
    --primary : #344e41;
    --secondary : #3a5a40;
    --tertiary : #588157; 
    --light : #dad7cd;
    --contrast : #a3b18a;
}

#spinnerText{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: em;
    background-color: var(--light);
    color: var(--primary);

    padding: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 64px;
    width: 32px;
    height: 32px;


    animation: spinningText;
    animation-duration: 4s;
    animation-timing-function: ease;
    animation-iteration-count: infinite;
    
}
@keyframes spinningText{
    0%{
        transform: rotateZ(0deg);
    }
    50%{
        transform: rotateZ(180deg);
        background-color: #344e41;
        color: #a3b18a;
    }
    100%{
        transform: rotateZ(360deg);
    }

}

#spinnerDiv{
    display: flex;
    justify-content: center;
}

.dotSpinner{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: em;
    background-color: var(--light);
    color: var(--primary);

    margin: 4px;
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 64px;
    width: 32px;
    height: 32px;
}

#spinnerFirst{
    animation: first;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
   
#spinnerMiddle{
    animation: middle;
    animation-duration: 2s;
    animation-timing-function:linear;
    animation-iteration-count: infinite;   
}

#spinnerLast{
    animation: last;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;   
}

@keyframes first {
    0%{
        transform: translate(0, 0);
    }
    50%{
        transform: translate(0, 50px);
    }
    
    100%{
        transform: translate(0, 0);
    }
}


@keyframes middle {
    0%{
        transform: translate(0, 25px);
    }
    25%{
        transform: translate(0, 50px);
    }
    50%{
        transform: translate(0, 25px);
    }
    75%{
        transform: translate(0, 0px);
    }
    
    100%{
        transform: translate(0, 25px);
    }
}

@keyframes last {
    0%{
        transform: translate(0, 50px);
    }
    50%{
        transform: translate(0, 0px);
    }
    
    100%{
        transform: translate(0, 50px);
    }
}

#spinnerPersonal{
    display: flex;
    padding: 12px;
    background-color: white;
    border-radius: 24px;
}

#spinnerPersonal[data-clicked = "false"]{
    animation: steamboat;
    animation-duration: 3s;
    animation-timing-function: ease;
    animation-iteration-count: infinite;
}

@keyframes steamboat{
    0%{
        transform: rotateZ(-20deg)
    }
    50%{
        transform: rotateZ(20deg)
    }
    
    100%{
        transform: rotateZ(-20deg)
    }
}

#SteamBoatWillie{
    width: 128px;
    height: 128px;
}

#spinnerPersonal[data-clicked = "true"]{
    animation: flip;
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-iteration-count: 1;
}
@keyframes flip{
    0%{
        transform: rotateZ(0deg)
    }

    
    100%{
        transform: rotateZ(340deg)
    }
}`;

document.getElementById("spinner-js").innerText = 
`const spinner = document.getElementById("spinnerPersonal");

spinner.addEventListener("click", (e) => {
    spinner.setAttribute("data-clicked", true)
    setTimeout(unclicked, 1000)
    
})

function unclicked() {
    spinner.setAttribute("data-clicked", false)
}`;