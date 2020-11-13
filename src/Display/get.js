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

  const publicAPI = {
    getTodoInfoCategorySelectBtn,
    getNavBarCategory,
    getTodoListCardViewMain,
    getCardViewContainer,
    getAddTodoBtn,
    getContainer,
    getCreateTodoBtn,
    getCategorySelectionModal,
    getCreateTodoModal,
    getTitle,
    getDescription,
    getCategory,
    getTodoBasicDetail,
    getCheckMarker,
    getCategorySelectionModalItemsTitle
  }

  return {
    publicAPI
  }
}

export { Get };
