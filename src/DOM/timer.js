'use strict';
function simpleMessage() {
    alert('This is just an alert box');
}

// setTimeout(simpleMessage, 5000);

var myImage = document.querySelector('.fa');

var imageArray = ['red', 'yellow', 'green', 'black'];

var imageIndex = 0;

function changeImage() {
    for (var i = 0; i <= imageArray.length; i++) {
        imageIndex++;
        myImage.classList.add (imageArray[imageIndex]);
    }
}


var run =  setInterval(changeImage, 1000);

myImage.onclick = function () {
    clearInterval(run);
    
};