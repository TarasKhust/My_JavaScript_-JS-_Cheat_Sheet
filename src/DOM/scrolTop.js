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

let button = document.querySelector('html'),
    square = document.querySelector('.fa1');

let width = button.clientWidth,
    height = button.clientHeight;
width = button.offsetWidth,
    height = button.offsetHeight;
width = button.scrollWidth,
    height = button.scrollHeight;

square.addEventListener('click', function () {
    // button.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
    // scrollBy(0, 10);
    // scrollTo(0, 200);
    event.preventDefault(square);
});


console.log(width);
console.log(height);
console.log(button.getBoundingClientRect().height);
console.log(square);

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);