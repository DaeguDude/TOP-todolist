const Task = (() => {
  let taskList = [];

  const TaskFactory = (_title, _description) => {
    let _subtasks = [];
    let _dueDate;
    let _priority;
  
    const setTitle = (title) => { _title = title; }
    const setDescription = (description) => { _description = description }
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

  // Task Module
  return {
    taskList,
    addTask,
    TaskFactory
  }
})();


document.addEventListener('taskCreated', (e) => {
  console.log(e.detail);

  
  let title = Object.values(e.detail)[0];
  let description = Object.values(e.detail)[1];
  let task = Task.TaskFactory(title, description);
  Task.addTask(task);
  console.log(Task.taskList);
})


