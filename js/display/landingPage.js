const LandingPage = (() => {
  const getCreateTaskBtn = () => {
    return document.querySelector('button#create-task');
  }

  const getCreateCategoryBtn = () => {
    return document.querySelector('i#create-category-symbol');
  }
  
  return {
    getCreateTaskBtn,
    getCreateCategoryBtn
  }

})();

export { LandingPage }

