const markCompleted = (todoMainRow) => {
  // TODOLIST
  const category = get.getCurrentTodoListCategory();
  const todoNumValue = todoMainRow.getAttribute('data-todo');
  const todo = todoList.getTodos(category)[todoNumValue];
  todo.markCompleted();

  // DISPLAY
  const todoItem = todoMainRow.children[0];
  todoItem.classList.add('TodoItem-checked');
  const marker = todoItem.children[0].children[0];
  marker.setAttribute('class', 'fas fa-check-circle');
  marker.setAttribute('id', 'completedMarker');
  const todoItemTitle = todoItem.children[1];
  todoItemTitle.classList.add('TodoItem-title-checked');
  
  const deleteBtn = icon.loadTodoItemDeleteBtn();
  
  todoItem.appendChild(deleteBtn);


}

export { markCompleted };