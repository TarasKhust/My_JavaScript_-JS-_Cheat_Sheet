'use strict';
let button = document.querySelector('.fa');
let button1 = document.querySelectorAll('.fa');

let clickButton = button.onclick = () => { // click
    alert('asdas')
};

let eventButton = button.addEventListener('click', (event) => { //click event
    let target = event.target;
    target.style.display = 'none';
    event.preventDefault();// отмена стандратного поведения браузера
    alert('Произошло событие: ' + event.type + 'на елементе' + event.target);
});

let mouseButton = button.addEventListener('mouseenter', () => { //event
    alert('Watsap Man')
    console.log('welcome')
});

let arr = button1.forEach((item) => {
    item.addEventListener('mouseleave', (event) => {
        console.log(event.target);
    })
});