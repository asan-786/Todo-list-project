function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;
  
    const li = document.createElement('li');

    // const checkbox = document.createElement('input');
    // checkbox.type = 'checkbox';
    // checkbox.onchange = function () {
    //   if (checkbox.checked) {
    //     span.classList.add('completed');
    //   } else {
    //     span.classList.remove('completed');
    //   }
    // };
  
    // Create task text span
    const span = document.createElement('span');
    span.textContent = taskText;
    span.onclick = function () {
      span.classList.toggle('completed');
    };
  
    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function () {
      li.remove();
    };
     
    // li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
  
    document.getElementById('taskList').appendChild(li);
    taskInput.value = '';
  }
  