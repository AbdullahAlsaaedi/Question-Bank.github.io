

let addTaskBtnEl = document.querySelector('.add-subtask-btn2');

console.log(addTaskBtnEl)

addTaskBtnEl.addEventListener('click', function() {
    document.querySelector('.task-modal').style.display = 'block';
    document.querySelector('.newtask-main').style.opacity = "0.2"
    document.querySelector('body').style.backgroundColor = "rgb(214, 214, 214)";
    

});



