class cardPlayer {
    constructor(name, player) {
        this.name = name;
        this.player = player;
    }
    game() {
        console.log(`this ${this.name} this ${this.player}`);
    }
    exit() {
        console.log(`this ${this.name} this ${this.player}`);
    }
}


let ivan = new cardPlayer('Ivan', 'Subzero'),
    slava = new cardPlayer('Slava', 'Mortal');

console.log(ivan);
console.log(slava);
ivan.game(); /*?*/
slava.exit(); /*?*/