const CourseDb = require('./CourseDb');

class Course {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.author = data.author;
    }

    DbRequest(){
        CourseDb.dbInfo(this);
    }

}

module.exports = Course;
