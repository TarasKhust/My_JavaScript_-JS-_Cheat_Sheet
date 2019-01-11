const Course = require('./Course');
const CourseGroup = require('./CourseGroup');

const js_course = new Course('Js Course', 15);
const bootstrap_course = new Course('Bootstrap Course', 10);


const photoshop_course = new Course('Photoshop Course', 10);
const sketch_course = new Course('Sketch Course', 10);



const design_courses = new CourseGroup('Design Courses', [photoshop_course, sketch_course]);
const web_courses = new CourseGroup('Web Courses', [js_course, bootstrap_course]);


const main_node = new CourseGroup('main_node', [design_courses, web_courses]);


js_course.print();
console.log(js_course.total());

design_courses.print();

console.log('$' + design_courses.total());

main_node.print();

console.log('$' + main_node.total());

