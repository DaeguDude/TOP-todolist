const TodoList = () => {

  const _todos = {
    default: [],
  };

  // Add Todo
  const addTodo = (todo) => {
    let category = todo.getCategory();
    
    // if category doesn't exist, add one
    if (!(category in _todos)) {
      addNewCategory(category);
    } 
    
    _todos[category].push(todo);
  }

  const addNewCategory = (category) => {
    _todos[category] = [];
  }

  const deleteTodo = (todoToFind) => {
    // Iterate every todos in _todos, if found, remove it.
    for (const [category, todos] of Object.entries(_todos)) {
      const todosLength = todos.length;
      for (let i = 0; i < todos.length; i++) {
        const currentTodo = todos[i];
        const sameObjects = Object.is(todoToFind, currentTodo);
        if (sameObjects) {
          todos.splice(i, 1);;
          return;
        } 
      }  
    }
  }

  const deleteCategory = (category) => {
    return delete _todos[category];
  }

  const getAllTodos = () => {
    const allTodos = [];
    for (const [category, todos] of Object.entries(_todos)) {
      todos.forEach(todo => {
        allTodos.push(todo);
      })
    }

    return allTodos;
  }

  const getTodos = (category) => {
    return _todos[category];
  }

  const getAllCategories = () => {
    const categories = Object.keys(_todos);
    return categories;
  }

  const sortTodosDueDate = (todos) => {
    todos.sort((todoOne, todoTwo) => {
      const todoOneDueDate = todoOne.getDueDate();
      const todoTwoDueDate = todoTwo.getDueDate();
      
      return Number(todoOneDueDate) - Number(todoTwoDueDate);
    });
  }

  /**
   * ------------------------------------------------------------------
   * THIS NEEDS TO BE FIXED. 
   * IT'S WORKING. BUT VERY INEFFICIENT CODE
   * ------------------------------------------------------------------
   */
  const sortTodosPriority = (todos) => {
    
    const IMPORTANT = 1;
    const HIGH = 2;
    const MIDDLE = 3;
    const LOW = 4;

    todos.sort((todoOne, todoTwo) => {
      let todoOnePriority = todoOne.getPriority();
      let todoTwoPriority = todoTwo.getPriority();
      
      switch (todoOnePriority) {
        case "important":
          todoOnePriority = IMPORTANT;
          break;
        case "high":
          todoOnePriority = HIGH;
          break;
        case "middle":
          todoOnePriority = MIDDLE;
          break;
        case "low":
          todoOnePriority = LOW;
          break;
      }

      switch (todoTwoPriority) {
        case "important":
          todoTwoPriority = IMPORTANT;
          break;
        case "high":
          todoTwoPriority = HIGH;
          break;
        case "middle":
          todoTwoPriority = MIDDLE;
          break;
        case "low":
          todoTwoPriority = LOW;
          break;
      }
        
      return todoOnePriority - todoTwoPriority;
    });
  }

  const sortTodosCreatedDate = (todos) => {
    todos.sort((todoOne, todoTwo) => {
      const todoOneCreatedDate = todoOne.getCreatedDate();
      const todoTwoCreatedDate = todoTwo.getCreatedDate();
      
      return Number(todoOneCreatedDate) - Number(todoTwoCreatedDate);
    });
  }


  return {
    _todos,
    addTodo, addNewCategory, deleteTodo, deleteCategory,
    getTodos, getAllTodos, getAllCategories,
    sortTodosDueDate, sortTodosCreatedDate, sortTodosPriority
  }
}



  // const addCategory = (category) => {
  //   _todos[category] = [];
  // }

  // const getCategories = () => {
  //   const categories = [];
  //   for (const category in _todos) {
  //     categories.push(category);
  //   }

  //   return categories;
  // }
  

  // const addTodo = (todo, category) => {
  //   _todos[category].push(todo);    
  // }


  // const addCategory = (category) => {
  //   _todos[category] = [];
  // }

  // const getCategories = () => {
  //   const categories = [];
  //   for (const category in _todos) {
  //     categories.push(category);
  //   }

  //   return categories;
  // }
  
  // const getTodos = (category) => {
  //   // if category is passed, get todos in that category
  //   if (category != undefined) {
  //     for (const property in _todos) {
  //       if (property === category) {
  //         return _todos[property];
  //       }
  //     }
  //   } else {
  //     const allTodos = [];
  //     for (const property in _todos) {
  //       const todolist = _todos[property];
  //       todolist.forEach(todo => {
  //         allTodos.push(todo);
  //       })
  //     }

  //     return allTodos;
  //   }
  //   // if it's not passed return all todos    
  // }

  // const addTodo = (todo, category) => {
  //   _todos[category].push(todo);    
  // }

  // const sortByCreatedDate = (todos) => {
  //   todos.sort((todoOne, todoTwo) => {
  //     const todoOneCreatedDate = todoOne.getCreatedDate();
  //     const todoTwoCreatedDate = todoTwo.getCreatedDate();
      
  //     return Number(todoOneCreatedDate) - Number(todoTwoCreatedDate);
  //   });
  // }

  // const sortByDueDate = (todos) => {
  //   todos.sort((todoOne, todoTwo) => {
  //     const todoOneDueDate = todoOne.getDueDate();
  //     const todoTwoDueDate = todoTwo.getDueDate();
      
  //     return Number(todoOneDueDate) - Number(todoTwoDueDate);
  //   });
  // }

  // const sortByPriorities = (todos) => {

  // }
