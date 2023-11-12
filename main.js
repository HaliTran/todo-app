let taskId = 0;

function addTaskBtnHandler(event) {
  if (event.type === 'click' || event.key === 'Enter') {
    const listOfTasks = document.querySelector('#list-of-tasks');
    const task = document.querySelector('#task-to-add');
    const newTaskContainer = document.createElement('article');
    const radioInput = document.createElement('input');
    const taskDescription = document.createElement('p');

    if (task.value === '') return;

    const inputAttribute = {
      type: 'radio',
      id: `task-${taskId}`,
      name: `task-${taskId}`,
      'aria-label': 'task',
    };
    taskId += 1;

    for (const key in inputAttribute) {
      radioInput.setAttribute(key, inputAttribute[key]);
    }
    taskDescription.innerText = task.value;

    newTaskContainer.append(radioInput);
    newTaskContainer.append(taskDescription);

    listOfTasks.append(newTaskContainer);
    task.value = '';
  }
}

const addTaskButton = document.querySelector('#add-task-btn');
const taskInput = document.querySelector('#task-to-add');

addTaskButton.addEventListener('click', addTaskBtnHandler);
taskInput.addEventListener('keydown', addTaskBtnHandler);
