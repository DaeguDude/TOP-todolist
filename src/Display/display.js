import { 
  loadTodoItem,
  loadCategorySelectionModal,
  loadCreateListModal,
  loadCreateTodoModal,
  loadTodoDetailsCardView,
  loadCategories
} from './moduleLoaders/loadModules.js';




import { TodoList } from '../TodoList/TodoList.js';
import { Todo } from '../Todo/Todo.js';

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

  const getNavBarCategory = () => {
    const navBarCategory = document.querySelector('.navbar-category');
    return navBarCategory;
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
        const title = getTitle();
        const titleLength = title.length;
        if (titleLength != 0) {
          let todo = getTodoBasicDetail();
          todo = Todo(todo['title'], todo['description'], todo['category']);
          todoList.addTodo(todo);          
        }
      })

      const categorySelectBtn = getTodoInfoCategorySelectBtn();
      startListeningClickEvent(categorySelectBtn)
    }

    if ( targetId.includes('category-select') || targetClass.includes('category-select') ) {
      // To be done as dynamically
      const categories = ['The Odin Project', 'Gym', 'School', 'Life', 'Family'];
      container.appendChild(loadCategorySelectionModal(categories));
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

  const getTitle = () => {
    const titleTextarea = document.querySelector('.todoinfo-title textarea');
    return titleTextarea.value;
  }

  const getDescription = () => {
    const descriptionTextarea = document.querySelector('.todoinfo-description textarea');
    return descriptionTextarea.value;
  }

  const getCategory = () => {
    const categoryBtn = document.querySelector('.todoinfo-category button');
    return categoryBtn.textContent;
  }

  const getTodoBasicDetail = () => {
    const title = getTitle();
    const description =  getDescription();
    const category = getCategory();
    
    return { title, description, category };
  }

  const createTodo = () => {

  }

  return {
    getContainer,
    getCreateTodoBtn,
    getTodoInfoCategorySelectBtn,
    getCategorySelectionModal,
    getCreateTodoModal,
    getAddTodoBtn,
    openModal,
    closeModal,
    attachModalCloser,
    startListeningClickEvent,
    startUnfoldCategoryBtn,
    addTodo,
    showTodoDetailsCardView,
    getTodoBasicDetail
  }
}





export { Display };

// <i class="fas fa-chevron-down"></i>
// <i class="fas fa-chevron-up"></i>