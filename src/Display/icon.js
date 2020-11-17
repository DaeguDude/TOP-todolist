
const Icon = () => {
 
  const loadCheckMarker = () => {
    const checkMarker = document.createElement('i');
    checkMarker.classList.add('far', 'fa-check-circle');
  
    return checkMarker;
  }

  const loadUncompleteMarker = () => {
    const UncompleteMarker = document.createElement('i');
    UncompleteMarker.classList.add('fas', 'fa-check-circle');

    return UncompleteMarker;
  }

  const loadCompleteMarker = () => {
    const completeMarker = document.createElement('i');
    completeMarker.classList.add('far', 'fa-circle');

    return completeMarker;
  }


  const loadTodoItemDeleteBtn = () => {
    const deleteBtn = document.createElement('i');
    deleteBtn.classList.add('fas', 'fa-backspace', 'TodoItem-delete-btn');

    return deleteBtn;
  }



  

  return {
    loadCheckMarker,
    loadUncompleteMarker,
    loadCompleteMarker,
    loadTodoItemDeleteBtn,
  }
}

export { Icon };

