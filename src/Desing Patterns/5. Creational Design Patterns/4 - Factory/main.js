const userFactory = require('./userFactory');


const paul = userFactory('instructor', 'Paul', 'software engineer', 1000);
const john = userFactory('student', 'John', 'Beginner');

console.log(paul.toString());
console.log(john.toString());