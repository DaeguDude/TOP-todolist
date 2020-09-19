const CategoryModal = (() => {

  const getTextArea = () => {
    let textArea = document.querySelector('.main textarea');
  
    return textArea;    
  }
  
  const getCreateBtn = () => {
    let createBtn = document.querySelector('.modal button');
    return createBtn;
  }

  const getCategoryName = () => {
    return getTextArea().value;
  }
  
  const isTextAreaEmpty = (textarea) => {
    return (textarea.value.length === 0) ? true : false;
  }
  
  const disableCreateBtn = () => {
    let createBtn = getCreateBtn();
    createBtn.disabled = true;
  }
  
  const enableCreateBtn = () => {
    let createBtn = getCreateBtn();
    createBtn.disabled = false;
  }
  
  // If textarea is empty, button will be disabled. Conversly, if it's not empty, 
  // The button will be enabled.
  const activateBtnController = () => {
    let createBtn = getCreateBtn();
    let textArea = getTextArea();
    textArea.addEventListener('input', () => {
      isTextAreaEmpty(textArea) ? disableCreateBtn() : enableCreateBtn(); 
    }) 
  }

  const initialSetup = () => {
    /**
     * When category modal is opened up first, it should be disabled because there's 
     * no input yet. And then, I should activate the controller that will enable and
     * disabled the button based on textarea's length.
     */
    disableCreateBtn();
    activateBtnController();
  }

  return {
    getCreateBtn,
    getCategoryName,
    initialSetup
  }
})();

