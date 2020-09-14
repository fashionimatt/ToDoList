let enterButton = document.querySelector("#enter");
let input = document.querySelector("#userInput");
let ul = document.querySelector("ul");
let item = document.querySelector("li");
let n = 0;

function inputLength() {
    return input.value.length;
}

function listLength() {
    return item.length;
}

function createListElement() {
    let li = document.createElement("li");
    li.id = "item" + n;
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";


    function crossOut() {
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut);

    let delBtn = document.createElement("button");
    delBtn.appendChild(document.createTextNode("X"));
    li.appendChild(delBtn);
    delBtn.addEventListener("click", deleteListItem);

    n += 1;

    function deleteListItem(e) {
        let delTarget = document.querySelector("#" + delBtn.parentElement.id);
        let parentDiv = delTarget.parentElement;
        parentDiv.removeChild(delTarget);
    }
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(e) {
    if (inputLength() > 0 && e.which === 13) {
        createListElement();
    }
}

enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);