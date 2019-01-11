class CourseGroup {
    constructor(title, composite = []){
        this.title = title;
        this.composite = composite;
    }

    total () {
        // reduce()
        return this.composite.reduce((result, nextItem) => result + nextItem.total(), 0);
    }

    print(){

        console.log(`\n************ ${this.title} **************`);
        this.composite.forEach(element => element.print());
        console.log('*********************************************');
    }
    
}

module.exports = CourseGroup;