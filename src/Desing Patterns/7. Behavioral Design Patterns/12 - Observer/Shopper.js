class Shopper{
    constructor(name){
        this.name = name;
    }

    notify(categoryName, discount){
        console.log(`${this.name}, there is a sale for ${categoryName} course! ${discount}% off for every course`);
    }
}

module.exports = Shopper;