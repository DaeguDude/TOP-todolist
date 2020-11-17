import '../../css/todoListCardView.css';


const getTodoItem = (completed) => {
  const todoItem = document.createElement('div');
  todoItem.classList.add('TodoItem');

  if (completed === true) {
    todoItem.classList.add('TodoItem-checked');
  }

  return todoItem;
}

const getTodoItemCheckBox = (completed) => {
  const todoItemCheckBox = document.createElement('div');
  todoItemCheckBox.classList.add('TodoItem-checkBox');
  let marker;

  if (completed === true) {
    marker = getCheckedMarker();
    
  } else {
    marker = getEmptyCheckMarker();
  }

  todoItemCheckBox.appendChild(marker);

  return todoItemCheckBox;
}

const getEmptyCheckMarker = () => {
  const emptyCheckMark = document.createElement('i');
  emptyCheckMark.classList.add('far', 'fa-circle');
  emptyCheckMark.setAttribute('id', 'notCompletedMarker');

  return emptyCheckMark;
}

const getCheckedMarker = () => {
  const checkedMarker = document.createElement('i');
  checkedMarker.classList.add('far', 'fa-check-circle');
  checkedMarker.setAttribute('id', 'completedMarker');

  return checkedMarker;
}

const getDeleteBtn = () => {
  const deleteBtn = document.createElement('i');
  deleteBtn.classList.add('fas', 'fa-backspace', 'TodoItem-delete-btn');
  
  return deleteBtn;
}

const getTodoItemTitle = (title, completed) => {
  const todoItemTitle = document.createElement('div');
  todoItemTitle.classList.add('TodoItem-title');
  todoItemTitle.innerText = title;

  if (completed) {
    todoItemTitle.classList.add('TodoItem-title-checked');
  }

  return todoItemTitle;
}


const loadTodoItem = (title, index, completed) => {
  // We need to insert the row, todoitem is in the row
  const todoListMainRows = document.createElement('div');
  todoListMainRows.classList.add('TodoList-main-rows');
  todoListMainRows.setAttribute('data-todo', index);

  const todoItem = getTodoItem(completed);
  const todoItemCheckBox = getTodoItemCheckBox(completed);
  const todoItemTitle = getTodoItemTitle(title, completed);
  const deleteBtn = getDeleteBtn();


  todoListMainRows.appendChild(todoItem);
  todoItem.appendChild(todoItemCheckBox);
  todoItem.appendChild(todoItemTitle);

  if (completed === true) {
    todoItem.appendChild(deleteBtn);
  }

  return todoListMainRows;
}

export { loadTodoItem };





