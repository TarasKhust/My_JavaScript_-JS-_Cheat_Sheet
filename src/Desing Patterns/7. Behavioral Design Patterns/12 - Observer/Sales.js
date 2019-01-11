class Sales{
    constructor(){
        this.sales = [];
    }


    notify(categoryName, discount){

        this.sales.push({categoryName, discount});
    }
}

module.exports = Sales;