'use string';

let Name = document.querySelectorAll('.fa');// search all tags

let div = document.createElement('div'); // create tag

let text = document.createTextNode('odsaodlasd'); //create text

let form = document.querySelector('.form'); // search one tag

let login = document.querySelector('.login-page');

let b = document.querySelector('.title');

console.log(form);

div.classList.add('yellow', 'red', 'black'); // add Class

let a = div.classList.toggle('yellow',true);

if (a) {
    div.classList.toggle('black',false)
}

console.log(div);

div.innerHTML = '<h1>Hello World!</h1>'; // add html

div.textContent = 'Hello World!'; //add only text

div.appendChild(text); // add text

document.body.replaceChild(b, login); // replaced class

document.body.appendChild(div); // add class on documnet

document.body.removeChild(); // remove tag class


Name.forEach((item) => {  // Перебор Масива
    item.style.color = 'blue';
    item.style.fontSize = '16px';
    item.classList.add('yellow');
});