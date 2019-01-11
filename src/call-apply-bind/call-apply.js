'use strict';
let user = {
    name: 'John'
};

function sayName(surname, ola) {
    console.log(this); //Call
    console.log(` ${this.name} ${surname} ${ola}`); //Apply
}

console.log(sayName.call(user, 'Olaha'));
console.log(sayName.apply(user, ['Snow', 'Alll']));

function count(number) {
  return this * number;
}

let double = count.bind(2);
console.log(double(3));
console.log(double(10));