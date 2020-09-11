let add = document.querySelector("#add");
let addText = document.querySelector("#addText");
let taskInput = document.querySelector("#taskInput");

add.addEventListener("click", function () {
    addText.classList.add("addTaskDisappear");
    taskInput.style.display = "inline-block";
    
    setTimeout(function () {
        addText.style.display = "none";
        addText.classList.remove("addTaskDisappear")
        taskInput.classList.add("taskInputAppear");
    }, 500);

    
})