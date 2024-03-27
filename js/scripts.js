let namesToChange = ["Full Stack", "Web", "Back End", "Front End"];
let change = document.getElementById("name");
let position = 1;

function changePosition() {
    change.textContent = namesToChange[position];
    position++;

    if (position === (namesToChange.length)) {
        position = 0;
    }
}

setInterval(changePosition, 3000);

//modo escuro
function dark(){
    let bg = document.getElementById("bg");
    let dark = document.getElementById("dark");
    let ligth = document.getElementById("ligth");
    let title = document.getElementById("title");
    let subtitle = document.getElementById("subtitle");

    bg.classList.add("bgDark");
    dark.classList.add("darkOn");
    ligth.classList.remove("ligthOn");
    ligth.classList.add("ligth");
    title.classList.add("titleDark");
    subtitle.classList.add("titleDark");
}

function ligth(){
    let bg = document.getElementById("bg");
    let dark = document.getElementById("dark");
    let ligth = document.getElementById("ligth");
    let title = document.getElementById("title");
    let subtitle = document.getElementById("subtitle");

    bg.classList.remove("bgDark");
    dark.classList.remove("darkOn");
    ligth.classList.add("ligthOn");
    title.classList.remove("titleDark");
    subtitle.classList.remove("titleDark");
}