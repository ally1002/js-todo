let deletes;

let tasks = [];

const refreshTasks = () => {
    let html = '';
    tasks.map(function (task) {
        html += `<div class="task">
        <span class="body">- ${task.text}</span>
        <button id="${task.id}" class="delete">X</button>
        </div>\n`;
    });

    document.getElementById('todo-body').innerHTML = html;
    deletes = document.querySelectorAll('.delete');
    deletes.forEach(del => {
        del.addEventListener('click', (ev => removeNumber(ev.target.id)))
    });
}

refreshTasks();

document.querySelector('#todo-input').addEventListener('change', function () {
    if (this.value.length > 0) {
        let addTask = { id: tasks.length + 1, text: this.value };
        tasks.push(addTask);
        this.value = '';
        refreshTasks();
    }
});

const removeNumber = (id) => {
    console.log(id);
    tasks = tasks.filter((a => a.id != id));
    refreshTasks();
    console.log(tasks);
    console.log(deletes);
}
