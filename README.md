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
