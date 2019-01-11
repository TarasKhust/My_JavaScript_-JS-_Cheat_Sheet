class Category {

    constructor(name,  courses = []){
        this.name = name;
        this.courses = courses;

        this.next = null;
    }


    setNext(categoryName){
        this.next = categoryName;
    }

    search(itemName){
        const index = this.courses.map(item => item.name).indexOf(itemName);
        const found = this.courses[index];
        if(found){
            return {
                name: found.name,
                price: found.price,
                location: this.name
            }
        } else if(this.next) {
            return this.next.search(itemName);
        } else {
            return `We do not have ${itemName} course`
        }
    }

}

module.exports = Category;