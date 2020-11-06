const createCategorySelectionModalItems = (title) => {
  const categorySelectionModalItems = document.createElement('button');
  categorySelectionModalItems.classList.add('categorySelection-modal-items');

  const categorySelectionModalItemsTitle = document.createElement('div');
  categorySelectionModalItemsTitle.classList.add('categorySelection-modal-items-title');
  categorySelectionModalItemsTitle.innerText = title;

  categorySelectionModalItems.appendChild(categorySelectionModalItemsTitle);


  return categorySelectionModalItems;
}

const getCheckMarker = () => {
  const checkMarker = document.createElement('i');
  checkMarker.classList.add('far', 'fa-check-circle');

  return checkMarker;
}

const getCategorySelectionModal = () => {
  const categorySelectionModal = document.createElement('div');
  categorySelectionModal.classList.add('categorySelection-modal');

  const categorySelectionModalHeader = document.createElement('div');
  categorySelectionModalHeader.classList.add('categorySelection-modal-header');
  
  const categorySelectionModalTitle = document.createElement('div');
  categorySelectionModalTitle.classList.add('categorySelection-modal-title');
  categorySelectionModalTitle.innerText = 'Move to...';
  
  const categorySelectionModalMain = document.createElement('div');
  categorySelectionModalMain.classList.add('categorySelection-modal-main')

  categorySelectionModal.appendChild(categorySelectionModalHeader);
  categorySelectionModalHeader.appendChild(categorySelectionModalTitle);

  categorySelectionModal.appendChild(categorySelectionModalMain);
  
  const top = createCategorySelectionModalItems('The Odin Project');
  const gym = createCategorySelectionModalItems('gym');
  const work = createCategorySelectionModalItems('work');
  const school = createCategorySelectionModalItems('school');
  const life = createCategorySelectionModalItems('life');
  const jiujitsu = createCategorySelectionModalItems('jiujitsu');
  
  categorySelectionModalMain.appendChild(top);
  categorySelectionModalMain.appendChild(gym);
  categorySelectionModalMain.appendChild(work);
  categorySelectionModalMain.appendChild(school);
  categorySelectionModalMain.appendChild(life);
  categorySelectionModalMain.appendChild(jiujitsu);
  
  return categorySelectionModal;
}

// const body = document.querySelector('body');
// const categorySelectionModal = getCategorySelectionModal();
// body.appendChild(categorySelectionModal);








