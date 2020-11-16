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
    const categories = todoList.getAllCategories();
    
    // To just load the first category
    const createTodoModalContent = loadCreateTodoModal(categories[0]);
    container.appendChild(createTodoModalContent);
  }

  const openCreateListModal = () => {
    const container = get.getContainer();
    const createListModalContent = loadCreateListModal();
    container.appendChild(createListModalContent);
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
        todoList.addTodo(Todo(title, description, category));


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
      const categories = todoList.getAllCategories();
      openCategorySelectionModal(categories);
      activateSelectingCategory();
      attachModalCloser(get.getCategorySelectionModal());
    })
  }

  const activateUnfoldCategoryBtn = () => {
    const unfoldCategoryBtn = get.getUnfoldCategoryBtn();
    unfoldCategoryBtn.addEventListener('click', () => {
      // Read from todolist what categories exist
      const categories = todoList.getAllCategories();
      // Make each cataegory item and append it to the display
      const categoryListUl = loadCategories(categories);
      const navBarCategory = get.getNavBarCategory();
      navBarCategory.appendChild(categoryListUl);
      // Change 'v' to '^'
      showFoldBtn();
      showAddCategoryBtn();
      activateFoldCategoryBtn();

      // Add '+' createList button
    })
  }

  const activateFoldCategoryBtn = () => {
    const foldCategoryBtn = get.getFoldCategoryBtn();
    foldCategoryBtn.addEventListener('click', function changeToUnfold() {
      showUnfoldBtn();
      hideAddCategoryBtn();
      removeCategoryList();
      foldCategoryBtn.removeEventListener('click', changeToUnfold);
    })
  }

  const activateAddCategoryBtn = () => {
    const addCategoryBtn = get.getAddCategoryBtn();
    addCategoryBtn.addEventListener('click', () => {
      openCreateListModal();
      attachModalCloser(get.getCreateListModal());
      activateCreateListCancelBtn();
      activateCreateListCreateBtn();
    });
  }


  const activateCreateListCancelBtn = () => {
    const cancelBtn = get.getCreateListCancelBtn();
    cancelBtn.addEventListener('click', () => {
      closeModal(get.getCreateListModal());
    });
  }

  const activateCreateListCreateBtn = () => {
    const createBtn = get.getCreateListCreateBtn();
    createBtn.addEventListener('click', () => {
      const title = get.getCreateListTitle();
      if (title.length > 0) {
        todoList.addNewCategory(title);
        removeCategoryList();
        const categoryListUl = loadCategories(todoList.getAllCategories());
        const navBarCategory = get.getNavBarCategory();
        navBarCategory.appendChild(categoryListUl);
        
        closeModal(get.getCreateListModal());
      }
    })
  }

  const showFoldBtn = () => {    
    const unfoldBtn = get.getUnfoldCategoryBtn();
    unfoldBtn.style.display = "none";
    const foldBtn = get.getFoldCategoryBtn();
    foldBtn.style.display = "inline-block";
  }

  const showUnfoldBtn = () => {
    const foldBtn = get.getFoldCategoryBtn();
    foldBtn.style.display = "none";
    const unfoldBtn = get.getUnfoldCategoryBtn();
    unfoldBtn.style.display = "inline-block";
  }

  const showAddCategoryBtn = () => {
    const addCategoryBtn = get.getAddCategoryBtn();
    addCategoryBtn.style.display = "inline-block";
  }

  const hideAddCategoryBtn = () => {
    const addCategoryBtn = get.getAddCategoryBtn();
    addCategoryBtn.style.display = "none";
  }

  const removeCategoryList = () => {
    const categoryList = get.getNavBarCategoryList();
    categoryList.remove();
  }

  

  return {
    closeModal,
    attachModalCloser,
    startListeningClickEvent,
    addTodo,
    showTodoDetailsCardView,
    activateCreateTodoBtn,
    activateUnfoldCategoryBtn,
    activateAddCategoryBtn,
  }
}





export { Display };

// <i class="fas fa-chevron-down"></i>
// <i class="fas fa-chevron-up"></i>