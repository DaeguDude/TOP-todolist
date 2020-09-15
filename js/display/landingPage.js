import { loadTaskModal } from './loadTaskModal.js';

const LandingPage = (() => {

  const openTaskModalBox = () => {
    let body = document.querySelector('body');
    body.appendChild(loadTaskModal());
  }

  let createTaskBtn = document.querySelector('button#create-task');
  createTaskBtn.addEventListener('click', openTaskModalBox);

  return {

  }
});

LandingPage();

