const Task = (() => {
  let taskList = [];
  let taskCategories = ['plan', 'The Odin Project', 'Gym'];

  const TaskFactory = (_title, _description, _category) => {
    let _subtasks = [];
    let _dueDate;
    let _priority;
  
    const setTitle = (title) => { _title = title; }
    const setDescription = (description) => { _description = description }
    const setCategory = (category) => { _category = category };
  

    const setDueDate = (date) => { _dueDate = date; }
    const setPriority = (priority) => { _priority = priority }
    
    const getTitle = () => _title;
    const getDescription = () => _description;
    const getDueDate = () => _dueDate;
    const getPriority = () => _priority;
    const getSubtasks = () => _subtasks; 
    
    const addSubtask = (task) => _subtasks.push(task); 
    return {
      setTitle,
      setDescription,
      setCategory,
      setDueDate,
      setPriority,
      
      getTitle,
      getDescription,
      getDueDate,
      getPriority,
      getSubtasks,
  
      addSubtask
     }
  }

  const addTask = (task) => {
    taskList.push(task);
  }

  const addCategory = (category) => {
    taskCategories.push(category);
  }

  const getTaskCategories = () => taskCategories;

  // Task Module
  return {
    taskList,
    addTask,
    TaskFactory,
    addCategory,
    getTaskCategories
  }
})();

export { Task };




