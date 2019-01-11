const PersonDB = require('./PersonDB');

class Person1 {
    constructor(name, title, description, id) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.description = description;
    }

    displayData() {
        console.log(`${this.name} is a greate ${this.title}`);
    }
    displayData1() {
        alert(`${this.name} is a greate ${this.title}`);
    }
    DbRequest () {
        PersonDB.dbinfo(this);
    }
}

module.exports = Person1;