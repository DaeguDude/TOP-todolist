import { Display } from './display/display.js';
import { Task } from './task/task.js';

const MainControlCenter = (() => {

  const activateCreateTaskBtn = () => {
    let createTaskBtn = Display.LandingPage.getCreateTaskBtn();

    createTaskBtn.addEventListener('click', () => {
      let taskCategories = Task.getTaskCategories();
      let body = Display.getBodyNode();
      let taskModal = Display.loadTaskModal(taskCategories);
      
      // Should add closing modal feature as well
      taskModal.onclick = (event) => {
        let clickedTarget = event.target
        let isOutsideModalClicked = Display.isTargetModal(clickedTarget);
        if (isOutsideModalClicked) {
          Display.closeModal(taskModal);
        }
      }

      Display.showModal(taskModal); 
      Display.TaskModal.activateInitialSetup();
    })
  }

  const activateCreateCategoryBtn = () => {
    let createCategoryBtn = Display.LandingPage.getCreateCategoryBtn();

    createCategoryBtn.addEventListener('click', () => {
      let body = Display.getBodyNode();
      let categoryModal = Display.loadCategoryModal();
      
      // Should add closing modal feature as well
      categoryModal.onclick = (event) => {
        let clickedTarget = event.target
        let isOutsideModalClicked = Display.isTargetModal(clickedTarget);
        if (isOutsideModalClicked) {
          Display.closeModal(categoryModal);
        }
      }

      Display.showModal(categoryModal); 
      Display.CategoryModal.activateInitialSetup();
    })
  }

  return {
    activateCreateTaskBtn,
    activateCreateCategoryBtn,
  }
})();

MainControlCenter.activateCreateTaskBtn();
MainControlCenter.activateCreateCategoryBtn();

  // let createTaskBtn = Display.LandingPage.getCreateTaskBtn();

  // createTaskBtn.addEventListener('click', () => {
  //   let taskCategories = Task.getTaskCategories();
  //   let body = document.querySelector('body');
  //   let taskModal = Display.loadTaskModal(taskCategories);

  //   body.appendChild(taskModal);

      
  //   // For default setups to run - enable/disable button
  //   Display.TaskModal.activateInitialSetup();
    
  //   // To add a task to the 'Task' Module
  //   let addTaskBtn = Display.TaskModal.getAddTaskBtn();
  //   addTaskBtn.addEventListener('click', () => {
  //     let title = Display.TaskModal.getTaskTitle();
  //     let description = Display.TaskModal.getTaskDescription();
  //     let category = Display.TaskModal.getTaskCategory();
  //     let task = Task.TaskFactory(title, description, category);
  //     Task.addTask(task);
      
  //   })

  
  // })

  // let createCategoryBtn = Display.LandingPage.getCreateCategoryBtn();

  // createCategoryBtn.addEventListener('click', () => {
  //   Display.loadCategoryModal();
  //   let body = document.querySelector('body');
  //   let categoryModal = Display.loadCategoryModal();

  //   body.appendChild(categoryModal);
    
  //   // For default setups to run - enable/disable button
  //   Display.CategoryModal.initialSetup();

  //   // To close the modal
  //   categoryModal.onclick = (event) => {
  //     if (event.target === categoryModal) {
  //       categoryModal.remove();
  //     }
  //   }
  // })
  







