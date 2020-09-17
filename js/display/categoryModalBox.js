const CategoryModal = (() => {

  const getTextArea = () => {
    let textArea = document.querySelector('.main textarea');
  

    return textArea;    
  }
  
  const getCreateBtn = () => {
    let createBtn = document.querySelector('.modal button');
    return createBtn;
  }
  
  const isEmpty = (elem) => {
    return (elem.value.length === 0) ? true : false;
  }
  
  const disableCreateBtn = () => {
    let createBtn = getCreateBtn();
    createBtn.disabled = true;
  }
  
  const enableCreateBtn = () => {
    let createBtn = getCreateBtn();
    createBtn.disabled = false;
  }
  
  const activateBtnController = () => {
    let createBtn = getCreateBtn();
    let textArea = getTextArea();
    textArea.addEventListener('input', () => {
      isEmpty(textArea) ? disableCreateBtn() : enableCreateBtn(); 
    }) 
  }
})();

