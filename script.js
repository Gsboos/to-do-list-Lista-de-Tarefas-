const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌';
  deleteBtn.addEventListener('click', () => li.remove());

  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  input.value = '';
});
