import { getCreateTodoModal } from './getCreateTodoModal.js';


// Get the button that opens the modal
const btn = document.getElementById("myBtn");
const body = document.querySelector('body');


// When the user clicks the button, open the modal 
btn.onclick = function() {
  body.appendChild(getCreateTodoModal());
  
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  const modal = document.querySelector('.modal');
  console.log(modal);
  if (event.target === modal) {
    const closeModal = (modal) => {
      modal.remove();
    }

    closeModal(modal);
  }
}


