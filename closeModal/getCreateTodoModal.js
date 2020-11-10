const getTodoinfoContainerTitle = () => {
  const todoinfoContainerTitle = document.createElement('div');
  todoinfoContainerTitle.classList.add('todoinfo-container-title');

  const labelText = document.createElement('div');
  labelText.classList.add('Label__Text');
  labelText.innerText = 'TITLE';

  const todoinfoTitle = document.createElement('div');
  todoinfoTitle.classList.add('todoinfo-title');

  const titleTextarea = document.createElement('textarea');
  titleTextarea.classList.add('textField', 'textField-title')
  titleTextarea.setAttribute('rows', '1');
  titleTextarea.setAttribute('placeholder', 'I want to...');

  todoinfoContainerTitle.appendChild(labelText);
  todoinfoContainerTitle.appendChild(todoinfoTitle);
  todoinfoTitle.appendChild(titleTextarea);

  return todoinfoContainerTitle;
}

const getTodoinfoContainerDescription = () => {
  const todoinfoContainerDescription = document.createElement('div');
  todoinfoContainerDescription.classList.add('todoinfo-container-description');

  const labelText = document.createElement('div');
  labelText.classList.add('Label__Text');
  labelText.innerText = 'DESCRIPTION';

  const todoinfoDescription = document.createElement('div');
  todoinfoDescription.classList.add('todoinfo-description');

  const descriptionTextarea = document.createElement('textarea');
  descriptionTextarea.classList.add('textField', 'textField-description');
  descriptionTextarea.setAttribute('rows', '10');
  descriptionTextarea.setAttribute('placeholder', 'Insert your notes here');

  todoinfoContainerDescription.appendChild(labelText);
  todoinfoContainerDescription.appendChild(todoinfoDescription);
  todoinfoDescription.appendChild(descriptionTextarea);

  return todoinfoContainerDescription;
}

const getTodoinfoContainerCategory = () => {
  const todoinfoContainerCategory = document.createElement('div');
  todoinfoContainerCategory.classList.add('todoinfo-container-category');

  const labelText = document.createElement('div');
  labelText.classList.add('Label__Text');
  labelText.innerText = 'CATEGORY';

  const todoinfoCategory = document.createElement('div');
  todoinfoCategory.classList.add('todoinfo-category');

  const categorySelectionBtn = document.createElement('button');
  categorySelectionBtn.classList.add('todoinfo-category-selectBtn');
  // This needs to be changed sometimes
  categorySelectionBtn.innerText = "The Odin Project"

  todoinfoContainerCategory.appendChild(labelText);
  todoinfoContainerCategory.appendChild(todoinfoCategory);
  todoinfoCategory.appendChild(categorySelectionBtn);

  return todoinfoContainerCategory;
}

const getTodoInfoContainer = () => {
  const todoInfoContainer = document.createElement('div');
  todoInfoContainer.classList.add('createTodo-modal-todoinfo-container');

  const todoinfoContainerTitle = getTodoinfoContainerTitle();
  const todoinfoContainerDescription = getTodoinfoContainerDescription();
  const todoinfoContainerCategory = getTodoinfoContainerCategory();

  todoInfoContainer.appendChild(todoinfoContainerTitle);
  todoInfoContainer.appendChild(todoinfoContainerDescription);
  todoInfoContainer.appendChild(todoinfoContainerCategory);

  return todoInfoContainer;
}

const getAddTodoBtnContainer = () => {
  const addTodoBtnContainer = document.createElement('div');
  addTodoBtnContainer.classList.add('createTodo-modal-addTodoBtn-container');

  const createTodoBtns = document.createElement('button');
  createTodoBtns.classList.add('createTodo-buttons');
  createTodoBtns.innerText = "Add Todo";

  addTodoBtnContainer.appendChild(createTodoBtns);

  return addTodoBtnContainer;
}

// Return createTodoModal Contents
const getCreateTodoModal = () => {
  const modal = document.createElement('div')
  modal.classList.add('modal');

  const createTodoModal = document.createElement('div');
  createTodoModal.classList.add('createTodo-modal');
  createTodoModal.classList.add('modal-content');

  const todoInfoContainer = getTodoInfoContainer();
  const addTodoBtnContainer = getAddTodoBtnContainer();
  
  createTodoModal.appendChild(todoInfoContainer);
  createTodoModal.appendChild(addTodoBtnContainer);

  modal.appendChild(createTodoModal);

  return modal;
}

export { getCreateTodoModal };


