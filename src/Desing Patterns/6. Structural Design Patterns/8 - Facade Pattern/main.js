const { Course, CourseServicesFacade} = require('./Course');

const myCourse = new Course({
    name : 'JS Design Patterns',
    project : 'Udemy App'
});

console.log(myCourse);

CourseServicesFacade.CompleteMethod(myCourse);

console.log(myCourse);