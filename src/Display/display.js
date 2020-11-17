import { 
  loadTodoItem,
  loadCategorySelectionModal,
  loadCreateListModal,
  loadCreateTodoModal,
  loadTodoDetailsCardView,
  loadCategories
} from './moduleLoaders/loadModules.js';

import { Icon } from './icon.js';

import { Get } from './get.js';
import { TodoList } from '../TodoList/TodoList.js';
import { Todo } from '../Todo/Todo.js';

// // FUNCTIONALITIES
// import { markCompleted } from './functionalities/markComplete';

const icon = Icon();
const todoList = TodoList();
const get = Get().publicAPI;





const Display = () => {

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

  const activateMarker = (marker) => {
    const markerId = marker.getAttribute('id');
    marker.addEventListener('click', () => {
      if (markerId === 'notCompletedMarker') {
        const todoNumValue = get.getTodoNumValue(marker);
        const todoMainrow = get.getOneTodoListMainRow(todoNumValue);
        markCompleted(todoMainrow, todoList);
      } else {
        // Set Todo in Display Not completed
        console.log('what');
        // Set Todo in todolist Not completed
      }
    })
  }


  const markCompleted = (todoMainRow) => {
    // TODOLIST
    const category = get.getCurrentTodoListCategory();
    const todoNumValue = todoMainRow.getAttribute('data-todo');
    const todo = todoList.getTodos(category)[todoNumValue];
    todo.markCompleted();

    // DISPLAY
    const todoItem = todoMainRow.children[0];
    todoItem.classList.add('TodoItem-checked');
    const marker = todoItem.children[0].children[0];
    marker.setAttribute('class', 'fas fa-check-circle');
    marker.setAttribute('id', 'completedMarker');
    const todoItemTitle = todoItem.children[1];
    todoItemTitle.classList.add('TodoItem-title-checked');
    
    const deleteBtn = icon.loadTodoItemDeleteBtn();
    
    todoItem.appendChild(deleteBtn);


  }

  const markUncompleted = (todoMainRow) => {

  }

  const addTodo = (todo, index) => {
    const title = todo.getTitle();
    const completed = todo.isCompleted();
    const todoListCardViewMain = get.getTodoListCardViewMain();
    const todoItem = loadTodoItem(title, index, completed);
    const marker = todoItem.children[0].children[0].children[0];
    activateMarker(marker);
    
    todoListCardViewMain.appendChild(todoItem);
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

  const changeCategoryInCreateTodoModal = (category) => {
    const categorySelectBtn = get.getTodoInfoCategorySelectBtn();
    categorySelectBtn.innerText = category;
  }

  const placeMarker = (elem) => {
    const marker = icon.loadCheckMarker();
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
        item.appendChild(icon.loadCheckMarker());
      }   
    })
  }

  const activateAddTodoBtn = () => {
    const addTodoBtn = get.getAddTodoBtn();
    addTodoBtn.addEventListener('click', (event) => {
      const title = get.getTitle();
      if (title.length > 0) {
        const description = get.getDescription();
        const category = get.getCategory();
        console.log(category);
        // ALL WORKING. But I do need to add it to the 'todolist'
        todoList.addTodo(Todo(title, description, category));


        closeModal(get.getCreateTodoModal());
        loadTodoListCardView(category);
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
      activateCategoryListItems();

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
        activateCategoryListItems();
        
        closeModal(get.getCreateListModal());
      }
    })
  }

  const activateCategoryListItems = () => {
    const categoryLis = get.getCategoryItems();
    categoryLis.forEach(li => {
      li.addEventListener('click', () => {
        // If clicked, 
        const category = li.innerText;
        loadTodoListCardView(category);
      })
    })
  }



  const changeTodoListCardViewTitle = (title) => {
    const todoListHeader = get.getTodoListCardViewHeader();
    todoListHeader.innerText = title;
  }

  const loadTodoListCardView = (category) => {
    // Get header and change the name.
    changeTodoListCardViewTitle(category);
    // Remove Todo List
    removeTodoList();
    renderTodoList(category);
  }

  const renderTodoList = (category) => {
    const todos = todoList.getTodos(category);
    todos.forEach((todo, index) => {
      addTodo(todo, index);
    })
    
    
  }

  const removeTodoList = () => {
    const todos = get.getTodoListMainRows()
    todos.forEach(todo => {
      todo.remove();
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

  const changeToUncompleteMarker = () => {
    const checkCompleteMarker = get.getCheckCompleteBtn();
    checkCompleteMarker.remove();
    const uncompleteMarker = icon.loadUncompleteMarker();
  }

  return {
    closeModal,
    attachModalCloser,
    addTodo,
    showTodoDetailsCardView,
    activateCreateTodoBtn,
    activateUnfoldCategoryBtn,
    activateAddCategoryBtn,
  }
}





export { Display };
