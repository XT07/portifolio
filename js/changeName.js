let namesToChange = ["Full Stack", "Web", "Mobile"];
let change = document.getElementById("name");
let position = 1;

function changePosition() {
    change.textContent = namesToChange[position];
    position++;

    if (position === (namesToChange.length)) {
        position = 0;
    }
}

setInterval(changePosition, 2000);