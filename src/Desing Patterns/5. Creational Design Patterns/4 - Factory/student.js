const Person = require('./person');

class Student extends Person {
    constructor(name, level){
        super(name);
        this.level= level;
    }

    toString() {
        return JSON.stringify(this);
    }
}

module.exports = Student;