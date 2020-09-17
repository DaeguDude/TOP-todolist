import { loadCategoryModal } from './loadCategoryModal.js';
import { loadTaskModal } from './loadTaskModal.js';

let taskModal = loadTaskModal();
let categoryModal = loadCategoryModal();

const getModal = () => {
  return document.querySelector('.modal');
}

loadTaskModal();

window.onclick = (event) => {
  let modal = getModal();
  if (event.target === modal) {
    modal.remove();
  }
}