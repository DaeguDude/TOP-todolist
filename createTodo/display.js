const Display = (() => {

  const initialSetup = () => {
    let addTaskBtn = getAddTaskBtn();
    let titleArea = getTitleArea();
    
    // Disable the add task button
    disableBtn(addTaskBtn);

    // Add event listener for addTaskBtn. If add task button is clicked..
    startListeningCreatingTask(addTaskBtn);

    /**
     * If titleArea is empty, it will disable the add task button
     * if titleArea has any text, it will enable the add task button
     */
    elementEmptybtnController(titleArea, addTaskBtn);
  }

  const startListeningCreatingTask = (btn) => {
    btn.addEventListener('click', () => {
      console.log('Task Created');
    })
  }

  /**
   * Add event listener on given element, which will listen to changes on
   * its input. When it is empty, it will disable the button that was passed.
   * Conversly, it will enable the button if textarea has any text.
   */
  const elementEmptybtnController = (elem, btn) => {
    elem.addEventListener('input', (event) => {
      let elemLength = elem.value.length;
      if (elemLength > 0) {
        enableBtn(btn);    
      } else {
        disableBtn(btn);
      }
    })
  }

  const getTitle = () => {
    let titleArea = document.querySelector('div.task-modal textarea#task-title');
    let title = titleArea.value;

    return title;
  }

  const getTitleArea = () => {
    let titleArea = document.querySelector('div.task-modal textarea#task-title');

    return titleArea;
  }

  const getDescription = () => {
    let descriptionArea = document.querySelector('div.description-box textarea#task-description');
    let description = descriptionArea.value;

    return description;
  }

  const disableBtn = (btn) => {
    btn.disabled = true;
  } 

  const enableBtn = (btn) => {
    btn.disabled = false;
  }

  const getAddTaskBtn = () => {
    let addTaskBtn = document.querySelector('button.add-task-btn');
    return addTaskBtn;
  }

  const isTitleEmpty = () => {
    let title = getTitle();
    if(title.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  return {
    initialSetup,
    startListeningCreatingTask,
    isTitleEmpty,
    getAddTaskBtn,
    disableBtn,
    enableBtn,
    
  }
})();

Display.initialSetup();

