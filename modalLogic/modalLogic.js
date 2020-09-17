let modal = document.querySelector('.modal');
let categoryContainer = document.querySelector('div.category-container')
window.onclick = (event) => {
    if (event.taraget === categoryContainer) {
        categoryContainer.remove();
    }
}