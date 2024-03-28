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
    let lineTitle = document.getElementById("lineTitle");
    let p = document.getElementById("pDark");
    let a = document.getElementById("a1");
    let a2 = document.getElementById("a2");
    let foto = document.getElementById("foto");
    let line = document.getElementById("line");
    let line2 = document.getElementById("line2");
    let line3= document.getElementById("line3");
    let category = document.getElementById("categoryName");
    let category2 = document.getElementById("categoryName2");
    let category3 = document.getElementById("categoryName3");
    let category4 = document.getElementById("categoryName4");
    let shadow = document.getElementById("shadow");
    let shadow2 = document.getElementById("shadow2");
    let shadow3 = document.getElementById("shadow3");
    let shadow4 = document.getElementById("shadow4");
    let shadow5 = document.getElementById("shadow5");
    let shadow6 = document.getElementById("shadow6");
    let shadow7 = document.getElementById("shadow7");
    let shadow8 = document.getElementById("shadow8");
    let shadow9 = document.getElementById("shadow9");

    bg.classList.add("bgDark");
    dark.classList.add("darkOn");
    ligth.classList.remove("ligthOn");
    ligth.classList.add("ligth");
    title.classList.add("titleDark");
    subtitle.classList.add("titleDark");
    lineTitle.classList.add("lineTitleDark");
    p.classList.add("pDark");
    a.classList.add("menuDark");
    a2.classList.add("menuDark");
    foto.classList.add("foto");
    line.classList.add("line");
    line2.classList.add("line");
    line3.classList.add("line");
    category.classList.add("menuDark");
    category2.classList.add("menuDark");
    category3.classList.add("menuDark");
    category4.classList.add("menuDark");
    shadow.classList.add("shadow");
    shadow2.classList.add("shadow");
    shadow3.classList.add("shadow");
    shadow4.classList.add("shadow");
    shadow5.classList.add("shadow");
    shadow6.classList.add("shadow");
    shadow7.classList.add("shadow");
    shadow8.classList.add("shadow");
    shadow9.classList.add("shadow");
}

function ligth(){
    let bg = document.getElementById("bg");
    let dark = document.getElementById("dark");
    let ligth = document.getElementById("ligth");
    let title = document.getElementById("title");
    let subtitle = document.getElementById("subtitle");
    let lineTitle = document.getElementById("lineTitle");
    let p = document.getElementById("pDark");
    let a = document.getElementById("a1");
    let a2 = document.getElementById("a2");
    let foto = document.getElementById("foto");
    let line = document.getElementById("line");
    let line2 = document.getElementById("line2");
    let line3= document.getElementById("line3");
    let category = document.getElementById("categoryName");
    let category2 = document.getElementById("categoryName2");
    let category3 = document.getElementById("categoryName3");
    let category4 = document.getElementById("categoryName4");
    let shadow = document.getElementById("shadow");
    let shadow2 = document.getElementById("shadow2");
    let shadow3 = document.getElementById("shadow3");
    let shadow4 = document.getElementById("shadow4");
    let shadow5 = document.getElementById("shadow5");
    let shadow6 = document.getElementById("shadow6");
    let shadow7 = document.getElementById("shadow7");
    let shadow8 = document.getElementById("shadow8");
    let shadow9 = document.getElementById("shadow9");

    bg.classList.remove("bgDark");
    dark.classList.remove("darkOn");
    ligth.classList.add("ligthOn");
    ligth.classList.remove("ligth");
    title.classList.remove("titleDark");
    subtitle.classList.remove("titleDark");
    lineTitle.classList.remove("lineTitleDark");
    p.classList.remove("pDark");
    a.classList.remove("menuDark");
    a2.classList.remove("menuDark");
    foto.classList.remove("foto");
    line.classList.remove("line");
    line2.classList.remove("line");
    line3.classList.remove("line");
    category.classList.remove("menuDark");
    category2.classList.remove("menuDark");
    category3.classList.remove("menuDark");
    category4.classList.remove("menuDark");
    shadow.classList.remove("shadow");
    shadow2.classList.remove("shadow");
    shadow3.classList.remove("shadow");
    shadow4.classList.remove("shadow");
    shadow5.classList.remove("shadow");
    shadow6.classList.remove("shadow");
    shadow7.classList.remove("shadow");
    shadow8.classList.remove("shadow");
    shadow9.classList.remove("shadow");
}