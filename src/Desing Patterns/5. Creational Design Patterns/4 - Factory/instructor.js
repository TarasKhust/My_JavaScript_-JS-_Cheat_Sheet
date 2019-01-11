const Person = require('./person');

class Instructor extends Person{
    constructor(name, position, earnings){
        super(name);
        this.position = position;
        this.earnings = earnings;
    }

    toString(){
        return JSON.stringify(this);
    }
}

module.exports = Instructor;