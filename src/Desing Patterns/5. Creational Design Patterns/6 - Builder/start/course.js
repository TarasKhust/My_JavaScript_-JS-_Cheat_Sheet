class Course {
    constructor(name, sales, isFree = false, price, isCampain = false) {
        this.name = name;
        this.sales = sales || 0;
        this.isFree = isFree;
        this.price = price || 0;
        this.isCampain = isCampain; // Advertising Campaign
    }

    toString() {
        return console.log(JSON.stringify(this));
    }
}

module.exports = Course;