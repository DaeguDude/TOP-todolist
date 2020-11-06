// Universal Functions
const getLabelText = (label) => {
  const labelText = document.createElement('div');
  labelText.classList.add('Label__Text');
  labelText.innerText = label;

  return labelText;
}

const capitalizeFirstLetter = (str) => {
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1)
  return capitalized;
}

const getPriorityBtn = (importance) => {
  const priorityBtn = document.createElement('button');
  const id = `priority-${importance}-btn`;
  priorityBtn.setAttribute('id', id);
  // innertext of btn has 'Importance', not 'impmortance'
  priorityBtn.innerText = capitalizeFirstLetter(importance);

  priorityBtn.classList.add('priority-tag', 'priority-btns-not-selected');

  return priorityBtn;
}

const getTitleRow = () => {
  const titleRow = document.createElement('div');
  titleRow.classList.add('TodoEdit-main-titleRow', 'TodoEdit-padder');
  
  const labelText = getLabelText('TITLE');
  
  const titleTextArea = document.createElement('textarea');
  titleTextArea.classList.add('textField', 'TodoEdit-title-textfield');
  titleTextArea.setAttribute('rows', '1');


  titleRow.appendChild(labelText);
  titleRow.appendChild(titleTextArea);

  return titleRow;
}

const getTagRow = () => {
  const tagRow = document.createElement('div');
  tagRow.classList.add('TodoEdit-main-tagRow', 'TodoEdit-padder');

  const labelText = getLabelText('TAGS');
  const tags = document.createElement('div');
  tags.classList.add('TodoEdit-Tags');
  
  tagRow.appendChild(labelText);
  tagRow.appendChild(tags);

  tags.appendChild(getPriorityBtn('important'));
  tags.appendChild(getPriorityBtn('high'));
  tags.appendChild(getPriorityBtn('middle'));
  tags.appendChild(getPriorityBtn('low'));

  return tagRow;
}

const getDueDateRow = () => {
  const dueDateRow = document.createElement('div');
  dueDateRow.classList.add('TodoEdit-main-DueDateRow', 'TodoEdit-padder');

  const labelText = getLabelText('DUE DATE');

  const dueDateInputBox = document.createElement('div');
  dueDateInputBox.classList.add('TodoEdit-DueDateBox');

  // Should be its own module later
  const dateInput = document.createElement('input');
  dateInput.setAttribute('type', 'date');
  dateInput.setAttribute('id', 'TodoEdit-DueDate');
  dateInput.setAttribute('name', 'DueDate');
  dateInput.setAttribute('value', '2020-11-03');
  dateInput.setAttribute('min', '2020-11-03');

  // Appending Child
  dueDateRow.appendChild(labelText);
  dueDateRow.appendChild(dueDateInputBox);
  
  dueDateInputBox.appendChild(dateInput);

  return dueDateRow;
}

const getDescriptionRow = () => {
  const descriptionRow = document.createElement('div');
  descriptionRow.classList.add('TodoEdit-main-DescriptionRow', 'TodoEdit-padder');

  const labelText = getLabelText('DESCRIPTION');

  const descriptionTextArea = document.createElement('textarea');
  descriptionTextArea.classList.add('textField', 'textField-description');
  descriptionTextArea.setAttribute('rows', '7');

  descriptionRow.appendChild(labelText);
  descriptionRow.appendChild(descriptionTextArea);

  return descriptionRow;
}

const getCreatedDateRow = (date) => {
  // Maybe I can import some library to get today's date

  const createdDateRow = document.createElement('div');
  createdDateRow.classList.add('TodoEdit-main-CreatedDateRow', 'TodoEdit-padder');

  const labelText = getLabelText('CREATED DATE');

  const createdDate = document.createElement('div');
  createdDate.classList.add('TodoEdit-CreatedDate');
  // DYNAMIC DATE NEEDED
  createdDate.innerText = '2020.11.03';

  createdDateRow.appendChild(labelText);
  createdDateRow.appendChild(createdDate);

  return createdDateRow;
}

const getTodoEditHeader = () => {
  const todoEditHeader = document.createElement('div');
  todoEditHeader.classList.add('TodoEdit-header');
  todoEditHeader.innerText = "TODO DETAILS";

  return todoEditHeader;
}

const getTodoEditMain = () => {
  const todoEditMain = document.createElement('div');
  todoEditMain.classList.add('TodoEdit-main');

  todoEditMain.appendChild(getTitleRow());
  todoEditMain.appendChild(getTagRow());
  todoEditMain.appendChild(getDueDateRow());
  todoEditMain.appendChild(getDescriptionRow());
  todoEditMain.appendChild(getCreatedDateRow());

  return todoEditMain;
}

const getTodoEditPane = () => {
  const todoEditPane = document.createElement('div');
  todoEditPane.classList.add('TodoEdit-Pane');

  todoEditPane.appendChild(getTodoEditHeader());
  todoEditPane.appendChild(getTodoEditMain());

  return todoEditPane;
}

// Should export only one big function
const getTodoDetailsCardView = () => {
  const todoDetailsCardView = document.createElement('div');
  todoDetailsCardView.classList.add('TodoDetails-CardView');

  const todoEditPane = getTodoEditPane();
  todoDetailsCardView.appendChild(todoEditPane);

  return todoDetailsCardView;
}

const body = document.querySelector('body');
body.appendChild(getTodoDetailsCardView());






