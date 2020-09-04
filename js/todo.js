const TaskFactory = (_title, _description, _dueDate, _priority) => {
  let _subtasks = [];

  const setTitle = (title) => { _title = title; }
  const setDescription = (description) => _description;
  const setDueDate = (date) => _dueDate;
  const setPriority = (p) => _priority;
  
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

let todo1 = TaskFactory('Gym Project', '5~7pm', 'monday 9pm', 'High');
