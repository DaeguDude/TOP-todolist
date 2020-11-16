import './css/landingPage.css';
import { Todo } from './Todo/Todo.js';
import { TodoList } from './TodoList/TodoList.js';
import { Display } from './Display/display.js'
import { loadCategories } from './Display/moduleLoaders/loadCategories.js';
import { storageAvailable } from './localStorage/storageAvailable';


const display = Display();
const todoList = TodoList();


// todoList.addNewCategory('The Odin Project');
// todoList.addNewCategory('Work');
// todoList.addNewCategory('Life');
// todoList.addNewCategory('School');
// todoList.addNewCategory('Gym');

// console.log(todoList.getAllCategories());


display.activateCreateTodoBtn();
display.activateUnfoldCategoryBtn();
display.activateAddCategoryBtn();
display.showTodoDetailsCardView();










// display.startListeningClickEvent


  






