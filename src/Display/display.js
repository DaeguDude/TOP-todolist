import { 
  loadTodoItem,
  loadCategorySelectionModal,
  loadCreateListModal,
  loadCreateTodoModal,
  loadTodoDetailsCardView,
  loadCategories
} from './moduleLoaders/loadModules.js';



import { TodoList } from '../TodoList/TodoList.js';

const todoList = TodoList();



const Display = () => {
  const getTodoInfoCategorySelectBtn = () => {
    return document.querySelector('.todoinfo-category-selectBtn');
  }

  const isEmpty = (str) => {
    if (str.length === 0) {
      return true;
    }
    
    return false;
  }
  const getTodoTitle = () => {
    const titleTextarea = document.querySelector('.todoinfo-title textarea');
    return titleTextarea.value;
  }

  const getNavBarCategory = () => {
    const navBarCategory = document.querySelector('.navbar-category');
    return navBarCategory;
  }

  const getTodoDescription = () => {
    const descriptionTextarea = document.querySelector('.todoinfo-description textarea');
    return descriptionTextarea.value;
  }

  const getTodoCategory = () => {
    const categorySelectBtn = document.querySelector('.todoinfo-category-selectBtn');
    return categorySelectBtn.textContent;
  }

  const getTodoListCardViewMain = () => {
    const todoListCardViewMain = document.querySelector('.TodoList-CardView-main');
    return todoListCardViewMain;
  }

  const getCardViewContainer = () => {
    const cardViewContainer = document.querySelector('.CardView-Container');
    return cardViewContainer;
  }

  const getAddTodoBtn = () => {
    return document.querySelector('.createTodo-buttons');
  }

  const getContainer = () => {
    return document.querySelector('.container');
  }

  const getCreateTodoBtn = () => {
    return document.querySelector('#createTodoBtn');
  }

  const getCategorySelectionModal = () => {
    return document.querySelector('.categorySelection-modal');
  }

  const getCreateTodoModal = () => {
    return document.querySelector('.createTodo-modal');
  }

  const openModal = (e) => {
    const container = getContainer();

    const targetId = e.target.id;
    let targetClass = e.target.className;
    if (targetClass === undefined) {
      targetClass = '';
    }

    if ( targetId.includes('createTodo') || targetClass.includes('createTodo') ) {
      container.appendChild(loadCreateTodoModal());
      const createTodoModal = getCreateTodoModal();
      attachModalCloser(createTodoModal);
      const addTodoBtn = getAddTodoBtn();
      addTodoBtn.addEventListener('click', () => {
        const title = getTodoTitle();
        if (!isEmpty(title)) {
          console.log(`ADD ${title} to the display`);
          console.log(`Add ${title} to the todolist`)
          closeModal(createTodoModal.parentNode);
        }
      })

      const categorySelectBtn = getTodoInfoCategorySelectBtn();
      startListeningClickEvent(categorySelectBtn)
    }

    if ( targetId.includes('category-select') || targetClass.includes('category-select') ) {
      container.appendChild(loadCategorySelectionModal());
      const categorySelectionModal = getCategorySelectionModal();
      attachModalCloser(categorySelectionModal);
    }

    if ( targetId.includes('createList') || targetClass.includes('createList') ) {
      container.appendChild(loadCreateListModal());
      // NEEDS TO BE IMPLEMENTED
    }
  }

  const closeModal = (modal) => {
    modal.remove();
  }

  const attachModalCloser = (modalContent) => {
    window.addEventListener('click', function closeThisModal(e) {
      const modal = modalContent.parentNode;
      if (e.target === modal) {
        closeModal(modal);
        window.removeEventListener('click', closeThisModal);
      }
    })
  }

  const startListeningClickEvent = (elem) => {
    elem.addEventListener('click', openModal);
  }

  const startUnfoldCategoryBtn = () => {
    const unfoldCategoryBtn = document.querySelector('#unfold-category-btn');
    unfoldCategoryBtn.addEventListener('click', () => {
      const categories = todoList.getAllCategories();
      
      const navBarCategory = getNavBarCategory();
      // const categoryList = loadCategories();
      // navBarCategory.appendChild(categoryList);
    });
  }

  const addTodo = (title) => {
    const todoListCardViewMain = getTodoListCardViewMain();
    todoListCardViewMain.appendChild(loadTodoItem(title));
  }

  const showTodoDetailsCardView = () => {
    const cardViewContainer = getCardViewContainer();
    cardViewContainer.appendChild(loadTodoDetailsCardView());
  }

  return {
    getContainer,
    getCreateTodoBtn,
    getTodoInfoCategorySelectBtn,
    getCategorySelectionModal,
    getCreateTodoModal,
    openModal,
    closeModal,
    attachModalCloser,
    startListeningClickEvent,
    startUnfoldCategoryBtn,
    addTodo,
    showTodoDetailsCardView
  }
}



export { Display };

// <i class="fas fa-chevron-down"></i>
// <i class="fas fa-chevron-up"></i>