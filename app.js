// Get the tasks from localStorage or use an empty array
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Get the elements from the DOM
const list = document.querySelector('#tasks');
const addButton = document.querySelector('#add-button');

// Display the list of tasks
function displayTasks() {
  list.innerHTML = '';
  tasks.forEach((task, index) => {
    const item = document.createElement('li');
    item.textContent = task;
    
    // Add an edit button to each task item
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
      editTask(index);
    });
    item.appendChild(editButton);
    
    // Add a delete button to each task item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      deleteTask(index);
    });
    item.appendChild(deleteButton);
    
    list.appendChild(item);
  });
}

// Add a new task to the list
function addTask() {
  const task = prompt('Enter a new task:');
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  displayTasks();
}

// Edit a task in the list
function editTask(index) {
  const task = prompt('Enter a new name for the task:', tasks[index]);
  tasks[index] = task;
  localStorage.setItem('tasks', JSON.stringify(tasks));
  displayTasks();
}

// Delete a task from the list
function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  displayTasks();
}

// Add an event listener to the "Add Task" button
addButton.addEventListener('click', addTask);

// Display the list of tasks on page load
displayTasks();
