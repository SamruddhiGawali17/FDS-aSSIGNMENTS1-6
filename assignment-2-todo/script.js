function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();

  if (taskText === '') return;

  const ul = document.getElementById('taskList');
  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = taskText;
  span.style.cursor = 'pointer';
  span.onclick = function() {
    li.classList.toggle('completed');
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';
  deleteBtn.onclick = function() {
    ul.removeChild(li);
  };

  li.appendChild(span);
  li.appendChild(deleteBtn);
  ul.appendChild(li);

  input.value = '';
}