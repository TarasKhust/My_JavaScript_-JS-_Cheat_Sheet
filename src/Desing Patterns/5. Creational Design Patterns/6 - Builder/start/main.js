const Course = require('./course');

const course_1 = new Course('Design Patterns 1', 0, true, 149 , true);
const course_2 = new Course('Design Patterns 1', 0,false, 0, false);

course_1.toString();
course_2.toString();