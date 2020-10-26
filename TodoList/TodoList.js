const TodoList = () => {

  const _todos = [];

  const addCategory = (category) => {
    _todos[category] = [];
  }

  const getCategories = () => {
    const categories = [];
    for (const category in _todos) {
      categories.push(category);
    }

    return categories;
  }
  
  const getTodos = (category) => {
    // if category is passed, get todos in that category
    if (category != undefined) {
      for (const property in _todos) {
        if (property === category) {
          return _todos[property];
        }
      }
    } else {
      const allTodos = [];
      for (const property in _todos) {
        const todolist = _todos[property];
        todolist.forEach(todo => {
          allTodos.push(todo);
        })
      }

      return allTodos;
    }
    // if it's not passed return all todos    
  }

  const addTodo = (todo, category) => {
    _todos[category].push(todo);    
  }

  const sortByCreatedDate = (todos) => {
    todos.sort((todoOne, todoTwo) => {
      const todoOneCreatedDate = todoOne.getCreatedDate();
      const todoTwoCreatedDate = todoTwo.getCreatedDate();
      
      return Number(todoOneCreatedDate) - Number(todoTwoCreatedDate);
    });
  }

  const sortByDueDate = (todos) => {
    todos.sort((todoOne, todoTwo) => {
      const todoOneDueDate = todoOne.getDueDate();
      const todoTwoDueDate = todoTwo.getDueDate();
      
      return Number(todoOneDueDate) - Number(todoTwoDueDate);
    });
  }

  const sortByPriorities = (todos) => {

  }


  // const deleteTodo = (todo) => {
    
  // }

  return {
    addCategory, getCategories, addTodo, getTodos,
    sortByDueDate, sortByCreatedDate, sortByPriorities
    /**
     * Delete a todo
     * ordering Todos
     *  by created date
     *  by dueDate
     *  by priorities
     */
  }
}
