const mainForm = document.querySelector('.main');
const switchForm = document.querySelector('.switch');
const btnRemove = document.querySelector('.btn__remove');
const addBtn = document.querySelector('.btn__add');
let counter = 0;

switchForm.innerText = counter;

addBtn.addEventListener('click', () => {
    counter++;
    switchForm.innerText = counter;
})

btnRemove.addEventListener('click', () => {
    counter = 0;
    switchForm.innerText = counter;
})

