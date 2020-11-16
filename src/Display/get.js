const Get = () => {
  const getTodoInfoCategorySelectBtn = () => {
    return document.querySelector('.todoinfo-category-selectBtn');
  }

  const getNavBarCategory = () => {
    const navBarCategory = document.querySelector('.navbar-category');
    return navBarCategory;
  }

  const getTodoListCardViewMain = () => {
    const todoListCardViewMain = document.querySelector('.TodoList-CardView-main');
    return todoListCardViewMain;
  }

  const getTodoListCardViewHeader = () => {
    const todoListCardViewHeader = document.querySelector('.TodoList-CardView-header');
    return todoListCardViewHeader;
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

  const getCreateListModal = () => {
    return document.querySelector('.createList-modal');
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

  const getCheckMarker = () => {
    const checkMarker = document.querySelector('.fa-check-circle');
    return checkMarker;
  }

  const getCategorySelectionModalItemsTitle = () => {
    return document.querySelectorAll('.categorySelection-modal-items-title');
  }

  const getUnfoldCategoryBtn = () => {
    return document.querySelector('#unfold-category-btn');
  }

  const getFoldCategoryBtn = () => {
    return document.querySelector('#fold-category-btn');
  }

  const getNavBarCategoryHeader = () => {
    return document.querySelector('.navbar-category-header');
  }

  const getAddCategoryBtn = () => {
    return document.querySelector('#add-category-btn');
  }

  const getNavBarCategoryList = () => {
    return document.querySelector('.navbar-category-list');
  }

  const getCreateListCreateBtn = () => {
    return document.querySelectorAll('.createList-buttons')[1];
  }

  const getCreateListCancelBtn = () => {
    return document.querySelectorAll('.createList-buttons')[0];
  }

  const getCreateListTitle = () => {
    return document.querySelector('.textField-title').value;
  }

  const getCategoryItems = () => {
    return document.querySelectorAll('.category-items');
  }

  const getTodoListMainRows = () => {
    return document.querySelectorAll('.TodoList-main-rows');
  }

  const getCheckCompleteMarker = () => {
    return document.querySelector('.TodoItem-checkBox').children[0];
  }

  const getTodoListMainRowsOfCheckMarker = (marker) => {
    const todoItemCheckBox = marker.parentNode;
    const todoItem = todoItemCheckBox.parentNode;
    const todoListMainRows = todoItem.parentNode;

    return todoListMainRows;
  }

  

  const publicAPI = {
    getCheckCompleteMarker,
    getTodoListMainRows,
    getCategoryItems,
    getCreateListTitle,
    getTodoInfoCategorySelectBtn,
    getNavBarCategory,
    getNavBarCategoryHeader,
    getNavBarCategoryList,
    getTodoListCardViewMain,
    getTodoListCardViewHeader,
    getCreateListCancelBtn,
    getCreateListCreateBtn,
    getCardViewContainer,
    getAddTodoBtn,
    getContainer,
    getCreateTodoBtn,
    getCategorySelectionModal,
    getCreateTodoModal,
    getCreateListModal,
    getTitle,
    getDescription,
    getCategory,
    getTodoBasicDetail,
    getCheckMarker,
    getCategorySelectionModalItemsTitle,
    getUnfoldCategoryBtn,
    getFoldCategoryBtn,
    getAddCategoryBtn
  }

  return {
    publicAPI
  }
}

export { Get };
