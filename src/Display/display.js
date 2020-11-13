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

  

  const openCreateTodoModal = () => {
    const container = getContainer();
    const createTodoModalContent = loadCreateTodoModal();
    container.appendChild(createTodoModalContent);
    

    
    
    // const createTodoModal = getCreateTodoModal();
    // attachModalCloser(createTodoModal);
    // const addTodoBtn = getAddTodoBtn();
    // addTodoBtn.addEventListener('click', () => {
    //   const title = getTitle();
    //   const titleLength = title.length;
    //   if (titleLength != 0) {
    //     let todo = getTodoBasicDetail();
    //     todo = Todo(todo['title'], todo['description'], todo['category']);
    //     todoList.addTodo(todo);          
    //   }
    // })

    // const categorySelectBtn = getTodoInfoCategorySelectBtn();
    // startListeningClickEvent(categorySelectBtn)
  
  }

  const getCheckMarker = () => {
    const checkMarker = document.querySelector('.fa-check-circle');
    return checkMarker;
  }
  
  const removeCheckMarker = () => {
    const checkMarker = getCheckMarker();
    checkMarker.remove();
  }
  
  const loadCheckMarker = () => {
    const checkMarker = document.createElement('i');
    checkMarker.classList.add('far', 'fa-check-circle');
  
    return checkMarker;
  }

  const changeCategoryInCreateTodoModal = (category) => {
    const categorySelectBtn = getTodoInfoCategorySelectBtn();
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

  const getCategorySelectionModalItemsTitle = () => {
    return document.querySelectorAll('.categorySelection-modal-items-title');
  }

  const openCategorySelectionModal = (categories) => {
    const container = getContainer();
    const categorySelectionModalContent = loadCategorySelectionModal(categories);
    container.appendChild(categorySelectionModalContent);

    const categorySelectBtn = getTodoInfoCategorySelectBtn();
    const selectedCategory = categorySelectBtn.textContent;

    const itemsTitle = getCategorySelectionModalItemsTitle();
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
    const addTodoBtn = getAddTodoBtn();
    addTodoBtn.addEventListener('click', (event) => {
      const title = getTitle();
      if (title.length > 0) {
        const description = getDescription();
        const category = getCategory();
        // ALL WORKING. But I do need to add it to the 'todolist'
        closeModal(getCreateTodoModal());
      }
    });
  }

  const activateCreateTodoBtn = () => {
    const createTodoBtn = getCreateTodoBtn();
    createTodoBtn.addEventListener('click', (event) => {
      openCreateTodoModal();
      attachModalCloser(getCreateTodoModal());
      activateCategorySelectBtn();
      activateAddTodoBtn();
      
    })
  }

  const activateSelectingCategory = () => {
    const categories = document.querySelectorAll('.categorySelection-modal-items');
    categories.forEach(category => {
      category.addEventListener('click', () => {
        placeMarker(category);
        closeModal(getCategorySelectionModal());
      });
    })
  }

  const activateCategorySelectBtn = () => {
    const categorySelectBtn = getTodoInfoCategorySelectBtn();
    categorySelectBtn.addEventListener('click', (event) => {
      openCategorySelectionModal(['The Odin Project', 'Gym', 'School']);
      activateSelectingCategory();
      attachModalCloser(getCategorySelectionModal());
    })
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
    getTodoBasicDetail,
    activateCreateTodoBtn
  }
}





export { Display };

// <i class="fas fa-chevron-down"></i>
// <i class="fas fa-chevron-up"></i>