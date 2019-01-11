// Old Syntax
var Course = function (title, author) {
    this.title = title;
    this.author = author;
}


Course.prototype.toString = function (arguments) {
    console.log(this.title + "... Author: " + this.author);
};

var course_1 = new Course("Bootstrap 4", "Paul");
var course_2 = new Course("Design Patterns", "Paul");

course_1.toString();
course_2.toString();



/*
// ES6 Syntax: modern JS)

class Course {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    toString() {
        return console.log(this.title + "... Author of the course:" + this.author);
    }
}

const course = new Course("Bootstrap 4: Professional Dev", "Paul");
course.toString();


*/