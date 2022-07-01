let input = document.querySelector(".entered-list");
let time = document.querySelector(".time");
let tasks = document.querySelector(".tasks");
let addBtn = document.querySelector(".add-list");



//disabled btn
input.addEventListener('keyup', () => {
    if (input.value.trim() !== 0) {
        addBtn.classList.add('active')
    } else {
        addBtn.classList.remove('active')
    }
})
time.addEventListener('keyup', () => {
    if (time.value.trim() !== 0) {
        addBtn.classList.add('active')
    } else {
        addBtn.classList.remove('active')
    }
})

//add task
addBtn.addEventListener('click', () => {
    if (input.value.trim() != 0) {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p>${input.value}   ${time.value}<p>
        <div class="item-btn">
        <i class="fa-regular fa-pen-to-square"></i>
        <i class="fa-regular fa-trash-can"></i>
    </div>
        `;
        tasks.appendChild(newItem);
        input.value = "";
    } else {
        alert('Please enter a task')
    }
})

//delete task
tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-trash-can')) {
        e.target.parentElement.parentElement.remove();
    }
})

//mark task complete
tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-pen-to-square')) {
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
})
document.getElementById("time1").style.color = "blue";