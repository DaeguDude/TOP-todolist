const TaskModal = (() => {
  
  const isTextAreaEmpty = (textarea) => {
    return (textarea.value.length === 0) ? true : false;
  }

  const disableAddTaskBtn = () => {
    let addTaskBtn = getAddTaskBtn();
    addTaskBtn.disabled = true;
  }
  
  const enableAddTaskBtn = () => {
    let addTaskBtn = getAddTaskBtn();
    addTaskBtn.disabled = false;
  }
  
  const getTitleTextArea = () => {
    let titleTextArea = document.querySelector('div.title-box textarea');
    return titleTextArea;
  }

  const getTaskTitle = () => {
    return getTitleTextArea().value;
  }
  
  const getDescriptionTextArea = () => {
    let descriptionArea = document.querySelector('div.description-box textarea');
    return descriptionArea;
  }

  const getTaskDescription = () => {
    return getDescriptionTextArea().value;
  }

  const getSelectCategory = () => {
    let selectCategory = document.querySelector('select#category');
    return selectCategory
  }

  const getTaskCategory = () => {
    return getSelectCategory().value;
  }
  
  const getAddTaskBtn = () => {
    let addTaskBtn = document.querySelector('button.add-task-btn');
    return addTaskBtn;
  }

  // Button will be enabled/disabled based on title area is empty or not
  const activateBtnController = () => {
    let addTaskBtn = getAddTaskBtn();
    let titleTextArea = getTitleTextArea();
    titleTextArea.addEventListener('input', () => {
      isTextAreaEmpty(titleTextArea) ? disableAddTaskBtn() : enableAddTaskBtn(); 
    }) 
  }


  const initialSetup = () => {
    // disable the button if modal is just opened, meaning textarea empty.
    disableAddTaskBtn();  
    activateBtnController();
  }

    

  return {
    getAddTaskBtn,
    
    getTaskTitle,
    getTaskDescription,
    getTaskCategory,

    initialSetup,
  }
})();