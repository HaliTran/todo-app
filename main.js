function addTaskBtnHandler(event) {
  if (event.type === 'click' || event.key === 'Enter') {
    const listOfTasks = document.querySelector('#list-of-tasks');
    const task = document.querySelector('#task-to-add');
    const newTask = document.createElement('div');
    newTask.innerHTML = `<p>${task.value}</p>`;
    listOfTasks.append(newTask);
    task.value = '';
  }
}

const addTaskButton = document.querySelector('#add-task-btn');
const taskInput = document.querySelector('#task-to-add');

addTaskButton.addEventListener('click', addTaskBtnHandler);
taskInput.addEventListener('keydown', addTaskBtnHandler);
