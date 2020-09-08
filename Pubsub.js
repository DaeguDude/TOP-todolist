const Pubsub = (() => {
  let events = {};

  // Subscribe to a certain topic with a function
  const subscribe = (eventName, fn) => {
    // If events doesn't exist, make a property as an array, named 'eventName'.
    if(events[eventName] === undefined) {
      events[eventName] = [];
    } 
    
    // Push the subscribed function to that 'eventName'
    events[eventName].push(fn);  
  }

  // Unsubscribe the certain function from certain topic
  const unsubscribe = (eventName, fn) => {
    // If certain eventName(topic) exists,
    if(events[eventName] != undefined) {
      for(let i = 0; i < events[eventName].length; i++) {
        // If it does, let's remove that function
        if(events[eventName][i] === fn) {
          events[eventName].splice(i, 1);
          break;
        }
      }
    }
  }

  const emit = (eventName, data) => {    
    /**
     * Executes all the functions under the 'eventName'(topic).
     * All the functions will be executed with 'data' parameter.
     */
    events[eventName].forEach((func) => {
      // if data was provided, only then pass it as an argument
      if(data != undefined) {
        func(data);
      } else {
        func();
      }
    })
  }

  // It lists out the functions that's subscribe to the specific event
  const sayEvents = (eventName) => {
    // If that event only exists, say all the funtions subscribed to it.
    if (events[eventName]) {
      console.log(`These are the functions under ['${eventName}'] topic.`);
      events[eventName].forEach(fn => {
        console.log(fn);
      })
    }
  }

  return {
    sayEvents,
    subscribe,
    unsubscribe,
    emit
  }
})();