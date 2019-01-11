const CourseBuilder = require('./CourseBuilder');

//const course_1 = new CourseBuilder('Design Patterns 1', 0, true, 149 , true);
//const course_2 = new CourseBuilder('Design Patterns 1', 0,false, 0, false);
const course_1 = new CourseBuilder('Design Patterns 1').makePaid(100).makeCampain().build();
const course_2 = new CourseBuilder('Design Patterns 2').build();

course_1.toString();
course_2.toString();