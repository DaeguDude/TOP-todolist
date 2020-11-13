import '../../css/categorySelectionModal.css';
const createCategorySelectionModalItems = (title) => {
  const categorySelectionModalItems = document.createElement('button');
  categorySelectionModalItems.classList.add('categorySelection-modal-items');

  const categorySelectionModalItemsTitle = document.createElement('div');
  categorySelectionModalItemsTitle.classList.add('categorySelection-modal-items-title');
  categorySelectionModalItemsTitle.innerText = title;

  categorySelectionModalItems.appendChild(categorySelectionModalItemsTitle);

  return categorySelectionModalItems;
}

const loadCategorySelectionModal = (categories) => {
  const modal = document.createElement('div');
  modal.classList.add('modal');

  const categorySelectionModal = document.createElement('div');
  categorySelectionModal.classList.add('categorySelection-modal');
  categorySelectionModal.classList.add('modal-content');

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
 
  categories.forEach(category => {
    const categoryItem = createCategorySelectionModalItems(category);


    categorySelectionModalMain.appendChild(categoryItem);
  });
  // const top = createCategorySelectionModalItems('The Odin Project');
  // const gym = createCategorySelectionModalItems('gym');
  // const work = createCategorySelectionModalItems('work');
  // const school = createCategorySelectionModalItems('school');
  // const life = createCategorySelectionModalItems('life');
  // const jiujitsu = createCategorySelectionModalItems('jiujitsu');
  
  // categorySelectionModalMain.appendChild(top);
  // categorySelectionModalMain.appendChild(gym);
  // categorySelectionModalMain.appendChild(work);
  // categorySelectionModalMain.appendChild(school);
  // categorySelectionModalMain.appendChild(life);
  // categorySelectionModalMain.appendChild(jiujitsu);

  modal.appendChild(categorySelectionModal);
  
  return modal;
}

export { loadCategorySelectionModal };

// const body = document.querySelector('body');
// const categorySelectionModal = getCategorySelectionModal();
// body.appendChild(categorySelectionModal);








