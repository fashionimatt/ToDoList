let addIcon = document.querySelector("#add");
let taskInput = document.querySelector("#taskInput");

addIcon.addEventListener("click", function () {
    addIcon.classList.add("addTaskDisappear");
    
    setTimeout(function () {
        addIcon.style.display = "none";
        addIcon.classList.remove("addTaskDisappear")
        taskInput.classList.add("taskInputAppear");
    }, 500);
})