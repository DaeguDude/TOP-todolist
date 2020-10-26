const Todo = (title, ...args) => {
  let _title = title;
  let _description = args[0];
  let _dueDate = args[1];
  let _createdDate = args[2];
  let _priority = args[3];
  let _category = args[4];
  let _completed = false;

  // ------------------------------------------
  // SET
  // ------------------------------------------
  const setTitle = (title) => {
    _title = title;
  }

  const setDescription = (description) => {
    _description = description
  }

  const setDueDate = (dueDate) => {
    _dueDate = dueDate;
  }

  const setCreatedDate = (createdDate) => {
    _createdDate = createdDate;
  }

  const setPriority = (priority) => {
    _priority = priority;
  }

  const setCategory = (category) => {
    _category = category;
  }

  // ------------------------------------------
  // GET
  // ------------------------------------------
  const getTitle = () => {
    return _title;
  }

  const getDescription = () => {
    return _description;
  }

  const getDueDate = () => {
    return _dueDate;
  }

  const getCreatedDate = () => {
    return _createdDate;
  }

  const getPriority = () => {
    return _priority;
  }

  const getCategory = () => {
    return _category;
  }

  // ------------------------------------------
  // MISCELLANEOUS
  // ------------------------------------------

  const isCompleted = () => {
    return _completed;
  }

  const markCompleted = () => {
    _completed = true;
  }

  const undoCompleted = () => {
    _completed = false;
  } 

  
  return {
    // SET
    setTitle, setDescription, setDueDate,
    setCreatedDate, setPriority, setCategory,
    getTitle, getDescription, getDueDate,
    getCreatedDate, getPriority, getCategory,
    markCompleted, undoCompleted, isCompleted
  }
}



