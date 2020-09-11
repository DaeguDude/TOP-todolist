const Display = (() => {

  const taskModalBox = (() => {
    const initialSetup = () => {
      let addTaskBtn = getAddTaskBtn();
      let titleArea = getTitleArea();
      
      // Disable the add task button
      disableBtn(addTaskBtn);
  
      /**
       * If titleArea is empty, it will disable the add task button
       * if titleArea has any text, it will enable the add task button
       */
      elemToCtrlBtn(addTaskBtn, titleArea);

      enableTaskCreatedEmitter(addTaskBtn);
    }
 
    const createTask = (title, description) => {
      let taskCreatedEvent = new CustomEvent('taskCreated', {
        detail: {
          title,
          description
        }
      });
  
      document.dispatchEvent(taskCreatedEvent);
    }
    
    const getTitleArea = () => {
      let titleArea = document.querySelector('div.task-modal textarea#task-title');
  
      return titleArea;
    }
    
    const getTitle = () => {
      let titleArea = document.querySelector('div.task-modal textarea#task-title');
      let title = titleArea.value;
  
      return title;
    }
  
    const getDescription = () => {
      let descriptionArea = document.querySelector('div.description-box textarea#task-description');
      let description = descriptionArea.value;
  
      return description;
    }
  
    const getAddTaskBtn = () => {
      let addTaskBtn = document.querySelector('button.add-task-btn');
      return addTaskBtn;
    }
    
    const makeTaskCreatedEvent = (title, description) => {
      let taskCreatedEvent = new CustomEvent('taskCreated', {
        detail: {
          title,
          description
        }
      })

      return taskCreatedEvent;
    }

    const enableTaskCreatedEmitter = (btn) => {
      btn.addEventListener('click', () => {
        let title = getTitle();
        let description = getDescription();
        let taskCreatedEvent = makeTaskCreatedEvent(title, description);
        document.dispatchEvent(taskCreatedEvent);
      })
    }

    return {
      initialSetup
    }
  })();

  /**
   * Give element power to control the button.
   */
  const elemToCtrlBtn = (btn, elem) => {
    elem.addEventListener('input', (event) => {
      let elemLength = elem.value.length;
      if (elemLength > 0) {
        enableBtn(btn);    
      } else {
        disableBtn(btn);
      }
    })
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

  return {
    taskModalBox
  }
})();

Display.taskModalBox.initialSetup();



