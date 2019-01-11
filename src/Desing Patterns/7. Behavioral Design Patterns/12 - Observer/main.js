const Shopper = require('./Shopper');
const Category = require('./Category');
const Sales = require('./Sales');


const desigCategory = new Category("Design Category");
const webCategory = new Category("WEb Dev Category");
const pdCategory = new Category("Personal Dev Category");


const paul = new Shopper("Paul");
const mike = new Shopper("Mike");
const john = new Shopper("John");
const alex = new Shopper("Alex");


const blackFriday = new Sales();

desigCategory.subscribe(blackFriday);
webCategory.subscribe(blackFriday);
pdCategory.subscribe(blackFriday)


desigCategory.subscribe(paul);
desigCategory.subscribe(mike);
desigCategory.subscribe(john);

webCategory.subscribe(mike);

pdCategory.subscribe(alex);

desigCategory.sale(20);
webCategory.sale(15);
pdCategory.sale(50);


console.log(blackFriday.sales);


