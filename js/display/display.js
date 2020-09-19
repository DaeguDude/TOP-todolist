import { loadCategoryModal } from './contentLoader/loadCategoryModal.js';
import { loadTaskModal } from './contentLoader/loadTaskModal.js';
import { CategoryModal } from './modal/categoryModal.js';
import { TaskModal } from './modal/taskModal.js';

import { LandingPage } from './landingPage.js';

import { Task } from '../task/task.js';

const Display = ((loadCategoryModal, loadTaskModal, CategoryModal, TaskModal, LandingPage) => {
  const getModal = () => {
    return document.querySelector('.modal');
  }

  const disableBtn = (btn) => {
    btn.disabled = true;
  } 

  const enableBtn = (btn) => {
    btn.disabled = false;
  }

  const isEmpty = (elem) => {
    if (elem.value.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  const openTaskModalBox = () => {
    let body = document.querySelector('body');
    let taskCategories = Task.getTaskCategories();
    body.appendChild(loadTaskModal(taskCategories));
  }

  const openCategoryModalBox = () => {
    let body = document.querySelector('body');
    body.appendChild(loadCategoryModal());
  }
 
  const initialSetup = () => {
    let createTaskBtn = document.querySelector('button#create-task');
    createTaskBtn.addEventListener('click', openTaskModalBox);
  
    let createCategorySign = document.querySelector('i#create-category-symbol');
    createCategorySign.addEventListener('click', openCategoryModalBox);
  }

  return {
    loadCategoryModal,
    loadTaskModal,
    CategoryModal,
    TaskModal,
    LandingPage,

    getModal
  }
})(loadCategoryModal, loadTaskModal, CategoryModal, TaskModal, LandingPage);



export { Display }







