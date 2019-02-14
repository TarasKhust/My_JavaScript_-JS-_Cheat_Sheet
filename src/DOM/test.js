'use strict';
let goods = ['foods', 'fruits', 'technics', 'phones', 'computers'];

const deletedValue = () => {
	goods = goods.filter(value => value !== 'technics')
};

deletedValue();
/*?*/

goods