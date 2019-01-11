// let timerId = setTimeout(sayHello, 3000); // timer

// let timerId1 = setInterval(sayHello, 3000); // interval

// clearTimeout(timerId); // clear timer and interval

// function sayHello () {
//     alert('Hello World');
// };
//
// let timerId = setTimeout(function a() {
//     console.log('Hello');
//     setTimeout(a, 2000);
// });
// clearTimeout(timerId);

let button = document.querySelector('.activate'),
    square = document.querySelector('.square__blue');

function myAnimathion () {
    let pos = 0;

    let timerId = setInterval(frame, 10);

    function frame() {
        if (pos === 300) {
            clearInterval(timerId);
        } else {
            pos++;
            square.style.top = pos + 'px';
            square.style.left = pos + 'px';
            square.style.transform = "rotate(-45deg)";
        }
    }
}

button.addEventListener('click', myAnimathion);

let btnBlock = document.querySelector('.login-form'),
    btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function (event) { // делегирование
    if (event.target && event.target.matches('button.fa')) {
        myAnimathion();
        event.preventDefault();
    }
});

console.log(btns);