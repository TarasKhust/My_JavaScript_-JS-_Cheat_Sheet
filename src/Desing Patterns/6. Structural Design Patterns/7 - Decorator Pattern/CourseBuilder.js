const Course = require('./course');

class CourseBuilder{
    constructor(name, sales = 0, price = 0){
        this.name = name;
        this.sales = sales;
        this.price = price;
    }

    makePaid(price){
        this.isFree = false;
        this.price = price;
        return this;
    }

    makeCampain(){
        this.isCampain = true;
        return this;
    }

    build(){
        return new Course(this);
    }
}


class HotNew{
    constructor(baseCourse){
        this.name = baseCourse.name + ' is Hot and New';
    }
}

class BestSeller {
    constructor(baseCourse){
        this.name = baseCourse.name + ' is BestSeller';
    }
}

module.exports = {CourseBuilder, HotNew, BestSeller } ;