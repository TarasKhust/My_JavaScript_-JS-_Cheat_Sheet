let user = {
    name: 'John'
};

function sayName(surname, ola) {
    console.log(this); //Call
    console.log(` ${this.name} ${surname} ${ola}`); //Apply
}

console.log(sayName.call(user, 'Olaha'));
console.log(sayName.apply(user, ['Snow', 'Alll']));