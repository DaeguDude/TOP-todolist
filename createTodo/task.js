// import { Pubsub } from './Pubsub.js'

const Task = (() => {
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

  // Listening to 'taskCreated' topic
  Pubsub.subscribe('taskCreated', TaskFactory)

  // Task Module
  return {
    TaskFactory
  }
})()


