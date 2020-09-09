let btn = document.querySelector('button');
let textarea = document.querySelector('textarea');

const event = new CustomEvent('btn-clicked', {
  detail: {
    name: 'Sanghak',
    age: 29,
    address: 'You don\'t have to know'
  }
});

const event2 = new CustomEvent('btn-clicked', {
  detail: {
    name: 'sdfdsf',
    age: 29,
    address: 'You don\'t have to know'
  }
});

let obj = new EventTarget();
obj.addEventListener('btn-clicked', (e) => {
  console.log(e);
});

btn.addEventListener('click', () => {
  obj.dispatchEvent(event);
  obj.dispatchEvent(event2);
})
