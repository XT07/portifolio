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