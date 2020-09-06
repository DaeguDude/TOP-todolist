const Display = (() => {

  const startListeningCreatingTask = () => {
    let addTaskBtn = document.querySelector('.add-task-btn');
    addTaskBtn.addEventListener('click', () => {
      console.log('Task Created');
    })
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
    startListeningCreatingTask,
    isTitleEmpty,
    getAddTaskBtn,
    disableBtn,
    enableBtn
  }
})();

let btn = Display.getAddTaskBtn()
let titleTextArea = document.querySelector('div.task-modal textarea#task-title');
console.log(titleTextArea);
