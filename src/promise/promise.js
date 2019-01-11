let drink = 0;

function shoot(arrow) {
    console.log('You Kill Him');
    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random() > .5 ? resolve({}): reject('You miss');
        }, 3000);
    });

    return promise;
};

function win() {
    console.log('Вы побежили');
    (drink == 1) ? buyBeer() : giveMoney();
}

function buyBeer() {
    console.log('Вам купили пиво')
}

function giveMoney() {
    console.log('Вам заплатили')
}

function loose () {
    console.log('Вы проиграли')
}

shoot({})
    .then(mark => console.log('Вы попали в цель!'))
    .then(win)
    .catch(loose);



const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log('Timer is done!');
    fetchData()
        .then(text => {
            console.log(text);
            return fetchData();
        })
        .then(text2 => {
            console.log(text2);
        });
}, 2000);

console.log('Hello!');
console.log('Hi!');