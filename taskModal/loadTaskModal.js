import { Task } from '../js/task/task.js'

// To create a drop down list of categories, taskCategories parameter exist
const loadTaskModal = (taskCategories) => {
  let modal = document.createElement('div');
  modal.setAttribute('class', 'modal');

  let taskContainer = document.createElement('div');
  taskContainer.setAttribute('class', 'task-container');
  
  let main = document.createElement('div');
  main.setAttribute('class', 'main items');
  
  let left = document.createElement('div');
  left.setAttribute('class', 'left');
  
  let right = document.createElement('div');
  right.setAttribute('class', 'right');
  
  let bottom = document.createElement('div');
  bottom.setAttribute('class', 'bottom items');

  
  const TitleBox = () => {
    let titleBox = document.createElement('div');
    titleBox.setAttribute('class', 'title-box');
  
    let span = document.createElement('span');
    span.innerText = 'TITLE';
  
    let textArea = document.createElement('textarea');
    textArea.setAttribute('name', 'title');
    textArea.setAttribute('id', 'task-title');
    textArea.setAttribute('placeholder', 'Title');
  
    titleBox.appendChild(span);
    titleBox.appendChild(textArea);
  
    return titleBox;
  }
  
  const DescriptionBox = () => {
    let descriptionBox = document.createElement('div');
    descriptionBox.setAttribute('class', 'description-box');
  
    let span = document.createElement('span');
    span.innerText = 'NOTES';
  
    let textArea = document.createElement('textarea');
    textArea.setAttribute('name', 'description');
    textArea.setAttribute('id', 'task-description');
    textArea.setAttribute('placeholder', 'Description');
  
    descriptionBox.appendChild(span);
    descriptionBox.appendChild(textArea);
  
    return descriptionBox;
  }
  
  const CategoryBox = () => {
    let categoryBox = document.createElement('div');
    categoryBox.setAttribute('class', 'category-box');
  
    let span = document.createElement('span');
    span.innerText = 'Category';
  
    let category = document.createElement('select');
    category.setAttribute('class', 'category');
    
    // To create a list of categories
    taskCategories.forEach(categoryName => {
      let option = document.createElement('option');
      option.setAttribute('value', categoryName);
      option.innerText = categoryName;
      category.appendChild(option);
    })

    categoryBox.appendChild(span);
    categoryBox.appendChild(category);
  
    return categoryBox;
  }
  
  const CreateTaskBox = () => {
    let createTaskBox = document.createElement('div');
    createTaskBox.setAttribute('class', 'create-task-box');
  
    let addTaskBtn = document.createElement('button');
    addTaskBtn.setAttribute('class', 'add-task-btn');
    addTaskBtn.innerText = 'Add Task';
  
    createTaskBox.appendChild(addTaskBtn);
  
    return createTaskBox;
  }
  
  taskContainer.appendChild(main);
  taskContainer.appendChild(bottom);
  
  main.appendChild(left);
  main.appendChild(right);
  bottom.appendChild(CreateTaskBox());
  
  left.appendChild(TitleBox());
  left.appendChild(DescriptionBox());
  
  right.appendChild(CategoryBox());

  modal.appendChild(taskContainer);

  return modal;
}

let taskCategories = Task.getTaskCategories();
console.log(loadTaskModal(taskCategories));

export { loadTaskModal }









