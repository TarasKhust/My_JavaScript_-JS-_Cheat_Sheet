class Course {
    constructor(builder) {
        this.name = builder.name;
        this.sales = builder.sales || 0;
        this.isFree = builder.isFree;
        this.price = builder.price || 0;
        this.isCampain = builder.isCampain; // Advertising Campaign
    }

    toString() {
        return console.log(JSON.stringify(this));
    }
}

module.exports = Course;