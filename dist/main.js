(()=>{"use strict";console.log(((e,t,o)=>{let r="Title",s=void 0,a=void 0,i="",d="",l="",c=!1;return{setTitle:e=>{r=e},setDescription:e=>{s=e},setCategory:e=>{a=e},setDueDate:e=>{i=e},setCreatedDate:e=>{d=e},setPriority:e=>{l=e},getTitle:()=>r,getDescription:()=>s,getCategory:()=>a,getCreatedDate:()=>d,getPriority:()=>l,getDueDate:()=>i,isCompleted:()=>c,markCompleted:()=>{c=!0},undoCompleted:()=>{c=!1}}})()),console.log((()=>{const e={default:[]},t=t=>{e[t]=[]};return{_todos:e,addTodo:o=>{let r=o.getCategory();r in e||t(r),e[r].push(o)},addNewCategory:t,deleteTodo:t=>{for(const[o,r]of Object.entries(e)){r.length;for(let e=0;e<r.length;e++){const o=r[e];if(Object.is(t,o))return void r.splice(e,1)}}},deleteCategory:t=>delete e[t],getTodos:t=>e[t],getAllTodos:()=>{const t=[];for(const[o,r]of Object.entries(e))r.forEach((e=>{t.push(e)}));return t},getAllCategories:()=>Object.keys(e),sortTodosDueDate:e=>{e.sort(((e,t)=>{const o=e.getDueDate(),r=t.getDueDate();return Number(o)-Number(r)}))},sortTodosCreatedDate:e=>{e.sort(((e,t)=>{const o=e.getCreatedDate(),r=t.getCreatedDate();return Number(o)-Number(r)}))},sortTodosPriority:e=>{e.sort(((e,t)=>{let o=e.getPriority(),r=t.getPriority();switch(o){case"important":o=1;break;case"high":o=2;break;case"middle":o=3;break;case"low":o=4}switch(r){case"important":r=1;break;case"high":r=2;break;case"middle":r=3;break;case"low":r=4}return o-r}))}}})())})();