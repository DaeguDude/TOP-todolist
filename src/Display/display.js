import { 
  loadTodoItem,
  loadCategorySelectionModal,
  loadCreateListModal,
  loadCreateTodoModal,
  loadTodoDetailsCardView,
  loadCategories
} from './moduleLoaders/loadModules.js';

import { Get } from './get.js';
import { TodoList } from '../TodoList/TodoList.js';
import { Todo } from '../Todo/Todo.js';

const todoList = TodoList();
const get = Get().publicAPI;

const Display = () => {

  
  
  const isEmpty = (str) => {
    if (str.length === 0) {
      return true;
    }
    
    return false;
  }

  const closeModal = (modal) => {
    modal.parentNode.remove();
  }

  const attachModalCloser = (modal) => {
    window.addEventListener('click', function closeThisModal(e) {
      if (e.target === modal.parentNode) {
        closeModal(modal);
        window.removeEventListener('click', closeThisModal);
      }
    })
  }

  const startListeningClickEvent = (elem) => {
    elem.addEventListener('click', openModal);
  }

  // const startUnfoldCategoryBtn = () => {
  //   const unfoldCategoryBtn = document.querySelector('#unfold-category-btn');
  //   unfoldCategoryBtn.addEventListener('click', () => {
  //     const categories = todoList.getAllCategories();
      
  //     const navBarCategory = getNavBarCategory();
  //     // const categoryList = loadCategories();
  //     // navBarCategory.appendChild(categoryList);
  //   });
  // }

  const addTodo = (title) => {
    const todoListCardViewMain = get.getTodoListCardViewMain();
    todoListCardViewMain.appendChild(loadTodoItem(title));
  }

  const showTodoDetailsCardView = () => {
    const cardViewContainer = get.getCardViewContainer();
    cardViewContainer.appendChild(loadTodoDetailsCardView());
  }

  

  const openCreateTodoModal = () => {
    const container = get.getContainer();
    const createTodoModalContent = loadCreateTodoModal();
    container.appendChild(createTodoModalContent);
  }

  const removeCheckMarker = () => {
    const checkMarker = get.getCheckMarker();
    checkMarker.remove();
  }
  
  const loadCheckMarker = () => {
    const checkMarker = document.createElement('i');
    checkMarker.classList.add('far', 'fa-check-circle');
  
    return checkMarker;
  }


  const changeCategoryInCreateTodoModal = (category) => {
    const categorySelectBtn = get.getTodoInfoCategorySelectBtn();
    categorySelectBtn.innerText = category;
  }

  const placeMarker = (elem) => {
    const marker = loadCheckMarker();
    const categoryTitle = elem.childNodes[0];
    const hasMarker = !(categoryTitle.children.length === 0);
    if (!hasMarker) {
      const category = categoryTitle.textContent;
      
      removeCheckMarker();
      categoryTitle.appendChild(marker);
      changeCategoryInCreateTodoModal(category);
    } 
  }

  const openCategorySelectionModal = (categories) => {
    const container = get.getContainer();
    const categorySelectionModalContent = loadCategorySelectionModal(categories);
    container.appendChild(categorySelectionModalContent);

    const categorySelectBtn = get.getTodoInfoCategorySelectBtn();
    const selectedCategory = categorySelectBtn.textContent;

    const itemsTitle = get.getCategorySelectionModalItemsTitle();
    itemsTitle.forEach(item => {
      const categoryTitle = item.textContent;
      if (categoryTitle === selectedCategory) {
        item.appendChild(loadCheckMarker());
      }   
    })
  }

  const createTodo = () => {

  }

  const activateAddTodoBtn = () => {
    const addTodoBtn = get.getAddTodoBtn();
    addTodoBtn.addEventListener('click', (event) => {
      const title = get.getTitle();
      if (title.length > 0) {
        const description = get.getDescription();
        const category = get.getCategory();
        // ALL WORKING. But I do need to add it to the 'todolist'
        closeModal(get.getCreateTodoModal());
      }
    });
  }

  const activateCreateTodoBtn = () => {
    const createTodoBtn = get.getCreateTodoBtn();
    createTodoBtn.addEventListener('click', (event) => {
      openCreateTodoModal();
      attachModalCloser(get.getCreateTodoModal());
      activateCategorySelectBtn();
      activateAddTodoBtn();
      
    })
  }

  const activateSelectingCategory = () => {
    const categories = document.querySelectorAll('.categorySelection-modal-items');
    categories.forEach(category => {
      category.addEventListener('click', () => {
        placeMarker(category);
        closeModal(get.getCategorySelectionModal());
      });
    })
  }

  const activateCategorySelectBtn = () => {
    const categorySelectBtn = get.getTodoInfoCategorySelectBtn();
    categorySelectBtn.addEventListener('click', (event) => {
      openCategorySelectionModal(['The Odin Project', 'Gym', 'School']);
      activateSelectingCategory();
      attachModalCloser(get.getCategorySelectionModal());
    })
  }

  const activateUnfoldCategoryBtn = () => {
    const unfoldCategoryBtn = get.getUnfoldCategoryBtn();
    unfoldCategoryBtn.addEventListener('click', () => {
      // Read from todolist what categories exist
      // Make each cataegory item and append it to the display
      const categoryListUl = loadCategories(['The Odin Project', 'Gym', 'Workout', 'Life']);
      const navBarCategory = get.getNavBarCategory();
      navBarCategory.appendChild(categoryListUl);
      // Change 'v' to '^'
      showFoldBtn();
      showAddCategoryBtn();

      // Add '+' createList button
    })
  }

  const showFoldBtn = () => {    
    const unfoldBtn = get.getUnfoldCategoryBtn();
    unfoldBtn.style.display = "none";
    const foldBtn = get.getFoldCategoryBtn();
    foldBtn.style.display = "inline-block";
  }

  const showAddCategoryBtn = () => {
    const addCategoryBtn = get.getAddCategoryBtn();
    addCategoryBtn.style.display = "inline-block";
  }

  

  return {
    closeModal,
    attachModalCloser,
    startListeningClickEvent,
    addTodo,
    showTodoDetailsCardView,
    activateCreateTodoBtn,
    activateUnfoldCategoryBtn
  }
}





export { Display };

// <i class="fas fa-chevron-down"></i>
// <i class="fas fa-chevron-up"></i>