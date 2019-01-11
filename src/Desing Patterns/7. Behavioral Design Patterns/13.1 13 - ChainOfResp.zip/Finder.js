const Category = require('./Category');
class Finder{

    constructor(name, courses = []){
        this.name = name;
        this.courses = courses;

        const design = new Category('design', courses.design);
        const language = new Category('language', courses.language);
        const music = new Category('music', courses.music);

        design.setNext(language);
        language.setNext(music);

        this.category = design;
    }

    find(itemName){
        return this.category.search(itemName);
    }
}

module.exports = Finder;