let taskId = 0;

const addTaskButton = document.querySelector('#add-task-btn');
const taskInput = document.querySelector('#task-to-add');
const listOfTasks = document.querySelector('#list-of-tasks');

function addTaskBtnHandler(event) {
  if (event.type === 'click' || event.key === 'Enter') {
    const task = document.querySelector('#task-to-add');
    const newTaskContainer = document.createElement('article');
    const checkBoxInput = document.createElement('input');
    const taskDescription = document.createElement('p');

    if (task.value === '') {
      alert('No task was added.');
      return;
    }

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

    // increment task id to uniquely identify another task later
    taskId += 1;
  }
}

function handleToDoChecked(event) {
  const taskElementNode = event.target.nextElementSibling; // grabs the p element describing the task
  const taskText = taskElementNode.innerText;
  const isThereStrikeout = taskElementNode.children.length;

  // if there is no strikeout on the element, add it, else remove it
  if (isThereStrikeout === 0) {
    const strikeoutElement = document.createElement('s');
    taskElementNode.innerText = '';
    strikeoutElement.innerText = taskText;
    taskElementNode.append(strikeoutElement);
  } else {
    const strikeThroughElement = taskElementNode.firstElementChild;
    strikeThroughElement.remove();
    taskElementNode.innerText = taskText;
  }
}

addTaskButton.addEventListener('click', addTaskBtnHandler);
taskInput.addEventListener('keydown', addTaskBtnHandler);
listOfTasks.addEventListener('change', handleToDoChecked);
