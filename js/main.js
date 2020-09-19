import { Display } from './display/display.js';
import { Task } from './task/task.js';



// To open up each modal
let createTaskBtn = Display.LandingPage.getCreateTaskBtn();

createTaskBtn.addEventListener('click', () => {
  let taskCategories = Task.getTaskCategories();
  let body = document.querySelector('body');
  let taskModal = Display.loadTaskModal(taskCategories);

  body.appendChild(taskModal);

    
  // For default setups to run - enable/disable button
  Display.TaskModal.initialSetup();
  
  // To add a task to the 'Task' Module
  let addTaskBtn = Display.TaskModal.getAddTaskBtn();
  addTaskBtn.addEventListener('click', () => {
    let title = Display.TaskModal.getTaskTitle();
    let description = Display.TaskModal.getTaskDescription();
    let category = Display.TaskModal.getTaskCategory();
    let task = Task.TaskFactory(title, description, category);
    Task.addTask(task);
    
  })

  // To close the modal
  taskModal.onclick = (event) => {
    if (event.target === taskModal) {
      taskModal.remove();
    }
  }
})

let createCategoryBtn = Display.LandingPage.getCreateCategoryBtn();

createCategoryBtn.addEventListener('click', () => {
  Display.loadCategoryModal();
  let body = document.querySelector('body');
  let categoryModal = Display.loadCategoryModal();

  body.appendChild(categoryModal);
  
  // For default setups to run - enable/disable button
  Display.CategoryModal.initialSetup();

  // To close the modal
  categoryModal.onclick = (event) => {
    if (event.target === categoryModal) {
      categoryModal.remove();
    }
  }
})




