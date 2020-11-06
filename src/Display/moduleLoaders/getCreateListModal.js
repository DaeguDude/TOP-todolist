const getCreateListModal = () => {
  const createListModal = document.createElement('div');
  createListModal.classList.add('createList-modal');

  // createList-modal-content-container
  const createListModalContentContainer = document.createElement('div');
  createListModalContentContainer.classList.add('createList-modal-content-container');

  const createListModalLabelTextContainer = document.createElement('div');
  createListModalLabelTextContainer.classList.add('createList-modal-LabelText-container');
  
  const labelText = document.createElement('div');
  labelText.classList.add('Label__Text');
  labelText.innerText = 'NAME THIS LIST';

  const createListModalTextFieldContainer = document.createElement('div');
  createListModalTextFieldContainer.classList.add('createList-modal-textField-container');

  const createListModalTextField = document.createElement('textarea');
  createListModalTextField.classList.add('textField', 'textField-title');
  createListModalTextField.setAttribute('rows', '1');

  // createList-modal-button-container
  const createListModalButtonContainer = document.createElement('div');
  createListModalButtonContainer.classList.add('createList-modal-button-container');

  const cancel = document.createElement('button');
  cancel.classList.add('createList-buttons');
  cancel.setAttribute('data-btn', 'cancel');
  cancel.innerText = 'Cancel';

  const create = document.createElement('button');
  create.classList.add('createList-buttons');
  create.setAttribute('data-btn', 'create');
  create.innerText = 'Create';

  // Structuring
  createListModal.appendChild(createListModalContentContainer);
  createListModal.appendChild(createListModalButtonContainer);

  // CreateListModalContentContainer
  createListModalContentContainer.appendChild(createListModalLabelTextContainer);
  createListModalContentContainer.appendChild(createListModalTextFieldContainer);
  
  createListModalLabelTextContainer.appendChild(labelText);
  createListModalTextFieldContainer.appendChild(createListModalTextField);

  // createListModalButtonContainer
  createListModalButtonContainer.appendChild(cancel);
  createListModalButtonContainer.appendChild(create);

  return createListModal;
}

// const body = document.querySelector('body');
// const createListModal = getCreateListModal();
// body.appendChild(createListModal);
