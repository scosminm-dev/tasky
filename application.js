const todoInput = document.getElementById('todo-text');
const addTaskButton = document.getElementById('add-btn');
const todoList = document.getElementById('act-list');

//Insert a new activity
const addTask = () => {
  const taskText = todoInput.value.trim();

  if (taskText !== '') {
    const taskItem = createTaskItem(taskText);
    todoList.appendChild(taskItem);
    todoInput.value = '';
  }
};

//Create new activity
const createTaskItem = (taskText) => {
  const taskItem = document.createElement('li');
  taskItem.className = 'act-item';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('checkbox');

  const taskTextSpan = document.createElement('span');
  taskTextSpan.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Remove';
  deleteBtn.classList.add('remove-btn');
  deleteBtn.addEventListener('click', deleteTask);

  taskItem.appendChild(checkbox);
  taskItem.appendChild(taskTextSpan);
  taskItem.appendChild(deleteBtn);

  return taskItem;
};

//Remove tasks
const deleteTask = (event) => {
  const taskItem = event.target.parentNode;
  todoList.removeChild(taskItem);
};

//Make state of task as finished 
const toggleTask = (event) => {
  const taskItem = event.target.parentNode;
  taskItem.classList.toggle('completed');
};

//Event listeners
addTaskButton.addEventListener('click', addTask);
todoInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

todoList.addEventListener('change', toggleTask);

//Stuff to do after work on task
const initalTasks = ['Buy clothes','Buy popcorn','Watch a movie','Go swiming','Buy a concert ticket', 'Go karting', 'Do bungee jumping'];

initalTasks.forEach((task) => {
  const taskItem = createTaskItem(task);
  todoList.appendChild(taskItem);
});
