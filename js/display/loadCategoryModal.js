const loadCategoryModal = () => {
  let categoryContainer = document.createElement('div');
  categoryContainer.setAttribute('class', 'category-container');
  
  const getMain = () => {
    let main = document.createElement('div');
    main.setAttribute('class', 'main');

    let span = document.createElement('span');
    span.setAttribute('class', 'label-text');
    span.textContent = 'NAME THIS LIST';

    let textArea = document.createElement('textarea')
    textArea.setAttribute('class', 'category-name');

    main.appendChild(span);
    main.appendChild(textArea);

    return main;
  }

  const getBtnBox = () => {
    let btnBox = document.createElement('div');
    btnBox.setAttribute('class', 'btn-box');

    let createCategoryBtn = document.createElement('button');
    createCategoryBtn.setAttribute('id', 'create-category-btn');
    createCategoryBtn.textContent = 'Create';

    btnBox.appendChild(createCategoryBtn);
    
    return btnBox;
  }

  categoryContainer.appendChild(getMain());
  categoryContainer.appendChild(getBtnBox());

  return categoryContainer;
}

export { loadCategoryModal }



