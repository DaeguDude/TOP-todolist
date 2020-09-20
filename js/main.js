import { Display } from './display/display.js';
import { TaskModal } from './display/modal/taskModal.js';
import { Task } from './task/task.js';

const MainControlCenter = (() => {

  const activateCreateTaskBtn = () => {
    let createTaskBtn = Display.LandingPage.getCreateTaskBtn();

    createTaskBtn.addEventListener('click', () => {
      let taskCategories = Task.getTaskCategories();
      let body = Display.getBodyNode();
      let taskModal = Display.loadTaskModal(taskCategories);
      let addTaskBtn;

      
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

      // To add tasks to Task Module
      addTaskBtn = Display.TaskModal.getAddTaskBtn();
      addTaskBtn.addEventListener('click', () => {
        let taskTitle = Display.TaskModal.getTaskTitle();
        let taskDescription = Display.TaskModal.getTaskDescription();
        let taskCategory = Display.TaskModal.getTaskCategory();
        let task = Task.TaskFactory(taskTitle, taskDescription, taskCategory);
        Task.addTask(task);
        console.log(Task.taskList);
        Display.closeModal(taskModal);
      })
      
    })
  }

  const activateCreateCategoryBtn = () => {
    let createCategoryBtn = Display.LandingPage.getCreateCategoryBtn();

    createCategoryBtn.addEventListener('click', () => {
      let body = Display.getBodyNode();
      let categoryModal = Display.loadCategoryModal();
      let createBtnInCategoryModal;
      
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

      // To add categories to Task, Display Module
      createBtnInCategoryModal = Display.CategoryModal.getCreateBtn();
      createBtnInCategoryModal.addEventListener('click', () => {
        let categoryName = Display.CategoryModal.getCategoryName();
        Task.addCategory(categoryName);
        Display.addCategory(categoryName);
        Display.closeModal(categoryModal);
      })
    })
  }

  return {
    activateCreateTaskBtn,
    activateCreateCategoryBtn,
  }
})();

MainControlCenter.activateCreateTaskBtn();
MainControlCenter.activateCreateCategoryBtn();

  






