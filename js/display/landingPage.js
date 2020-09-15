import { loadTaskModal } from './loadTaskModal.js';
import { loadCategoryModal } from './loadCategoryModal.js';

const LandingPage = (() => {

  const openTaskModalBox = () => {
    let body = document.querySelector('body');
    body.appendChild(loadTaskModal());
  }

  const openCategoryModalBox = () => {
    let body = document.querySelector('body');
    body.appendChild(loadCategoryModal());
  }

  let createTaskBtn = document.querySelector('button#create-task');
  createTaskBtn.addEventListener('click', openTaskModalBox);

  let createCategorySign = document.querySelector('i#create-category-symbol');
  createCategorySign.addEventListener('click', openCategoryModalBox);
});

LandingPage();

