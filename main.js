let taskId = 0;

function addTaskBtnHandler(event) {
  if (event.type === 'click' || event.key === 'Enter') {
    const listOfTasks = document.querySelector('#list-of-tasks');
    const task = document.querySelector('#task-to-add');
    const newTaskContainer = document.createElement('article');
    const checkBoxInput = document.createElement('input');
    const taskDescription = document.createElement('p');

    if (task.value === '') return;

    const inputAttribute = {
      type: 'checkbox',
      name: `task-${taskId}`,
      value: task.value,
      'aria-label': task.value,
    };

    for (const key in inputAttribute) {
      checkBoxInput.setAttribute(key, inputAttribute[key]);
    }
    taskDescription.innerText = task.value;
    taskDescription.classList.add('task');

    newTaskContainer.classList.add(`task-${taskId}`);
    newTaskContainer.append(checkBoxInput);
    newTaskContainer.append(taskDescription);

    listOfTasks.append(newTaskContainer);
    task.value = '';

    // increment task id to unique identify another task later
    taskId += 1;
  }
}

const addTaskButton = document.querySelector('#add-task-btn');
const taskInput = document.querySelector('#task-to-add');

addTaskButton.addEventListener('click', addTaskBtnHandler);
taskInput.addEventListener('keydown', addTaskBtnHandler);
