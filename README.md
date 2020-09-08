# TOP-todolist

## Things to grow at this project

- How to manage git workflow
> Please have a look at some articles before diving into the code

- Follow Problem Solving Skills
> Your aim is to develop problem solving skills. To practice it. Here's the [link](https://www.theodinproject.com/courses/web-development-101/lessons/problem-solving) to it. 
> PRINT IT OUT! AND ALWAYS FOLLOW THE INSTRUCTION

- Responsive Design
> This time is a good time to practice the responsive design. Head over to this [responsive](https://www.theodinproject.com/courses/html-and-css/lessons/responsive-design) instruction. And design both desktop and mobile friendly.

- Single Responsibility Principle
> Your object, function, and module should do one thing and do it well. If it's a one huge thing, you will have to separate it into smaller things.


## 09/03

### Practicing Responsive Design
- [Brad Traversy's Intro to Responsive Layouts](https://www.udemy.com/course/modern-html-css-from-the-beginning/learn/lecture/13285364#overview)

After this, don't try to look at responsive design again. Because, the point of this project is more on **functionality**.

#### Things I have learned

- Except for the really big `tag` or `container` he doesn't use `id` attribute.

```html
    <div id="showcase">
      <div class="container">
        <div class="showcase-content">
          <h1><span class="text-primary">Enjoy</span> Your Stay</h1>
          <p class="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, eligendi laboriosam. Repellendus officia harum eaque.</p>
          <a class="btn" href="about.html">About Our Hotel</a>
        </div>
      </div>
    </div>
```

- He has something called utility classes 
```css
.btn {
  display: inline-block;
  font-size: 18px;
  color: #fff;
  background: #333;
  padding: 13px 20px;
  border: none;
  cursor: pointer;
}

.btn:hover {
  background: #f7c08a;
  color: #333;
}

.btn-light {
  background: #f4f4f4;
  color: #333;
}

.bg-dark {
  background: #333;
  color: #fff;
}

.bg-light {
  background: #f4f4f4;
  color: #333;
}

.bg-primary {
  background: #f7c08a;
  color: #333;
}
```

## 09/04

### Let's have a look at how to manage git workflow.
And then, now dive into the todo project!
Functionality first, css later!

- [Git workflow strategies](https://www.youtube.com/watch?v=aJnFGMclhU8&ab_channel=GitHubTraining%26Guides)

## 09/06

### Working on....

> Hello guys, I have a question. How can you know some element's status continuously in Javascript?

What I'm trying to do here, I want to enable & disable the button depending on if textarea has any character or not.
So if textarea has no text, the button will be disabled. But if textarea has any text, it will be enabled.

I can disable, enable the button, and I can also check if textarea is empty or not. 
But my problem is, my button has to be enabled and disabled back and forth depending on textarea's length.
But I'm not too sure how you can continuously tracking the length of it.

**HAVE A LOOK AT THIS**
- https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onchange
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
- https://www.w3schools.com/jsref/event_oninput.asp


```javascript
let titleTextArea = document.querySelector('div.task-modal textarea#task-title');

const handleChange = (e) => {
    let textAreaLength = titleTextArea.value.length;
    if(textAreaLength > 0) {
        console.log('Not empty');
    } else {
        console.log('empty');
    }
}

titleTextArea.oninput = handleChange;
```

## 09/08

- ~~Enable & Disable the button if input is more than 0, and vice versa.~~
- ~~Make a pubsub module, so that each module can talk to each other through pubsub~~

### TODAY REVIEW

- worked hours[4 pomodoro]

**Things to work on**

Now I have my Pubsub module in the code. However, the problem is this.

1. While the module can talk to each other through pubsub, what if argument is more than one value?

For example..
```javascript
// Display.js
Pubsub.emit('taskCreated', title, notes);

// Task.js
Pubsub.subscribe('taskCreated', taskFactory)

// Pubsub.js
const emit = (eventName, data) => {    
  events[eventName].forEach((func) => {
    func(data);
  })
}
```

Like, for the function that needs more than one argument, like taskFactory does... what should I do?

Modify taskFactory function to just accept one argument? or modify pubsub.emit function to accept more argument?



