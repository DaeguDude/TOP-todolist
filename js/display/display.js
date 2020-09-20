import { loadCategoryModal } from './contentLoader/loadCategoryModal.js';
import { loadTaskModal } from './contentLoader/loadTaskModal.js';
import { CategoryModal } from './modal/categoryModal.js';
import { TaskModal } from './modal/taskModal.js';

import { LandingPage } from './landingPage.js';

import { Task } from '../task/task.js';

const Display = ((loadCategoryModal, loadTaskModal, CategoryModal, TaskModal, LandingPage) => {
  const getCategoryUl = () => {
    return document.querySelector('div.category ul');
  }

  const getEmptyElem = (elem) => {
    return document.createElement(elem);
  }

  const addTextToElem = (li, text) => {
    li.innerText = text;
  }
  
  const addCategory = (categoryName) => {
    let categoryUl = getCategoryUl();
    let li = getEmptyElem('li');
    addTextToElem(li, categoryName);
    categoryUl.appendChild(li);
  }
  
  const getBodyNode = () => {
    return document.querySelector('body');
  }
  
  const showModal = (modal) => {
    let body = getBodyNode();
    body.appendChild(modal);
  }

  const getModal = () => {
    return document.querySelector('.modal');
  }

  const isTargetModal = (target) => {
    let modal = getModal();
    if (target === modal) {
      return true;
    } else {
      return false;
    }
  }

  const closeModal = (modal) => {
    modal.remove();
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
 
  return {
    loadCategoryModal,
    loadTaskModal,
    CategoryModal,
    TaskModal,
    LandingPage,

    getModal,
    showModal,
    isTargetModal,
    closeModal,
    getBodyNode,
    addCategory
  }
})(loadCategoryModal, loadTaskModal, CategoryModal, TaskModal, LandingPage);



export { Display }







