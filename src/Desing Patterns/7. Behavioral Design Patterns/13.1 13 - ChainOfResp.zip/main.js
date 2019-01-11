const courses = require('./courses');
const Finder = require('./Finder');

const udemyFinder = new Finder("Finder Udemy" , courses);

let searQuery = 'Sketch';
const result = udemyFinder.find(searQuery);

console.log(` ${result.name} - ${result.price}$ - ${result.location}`);