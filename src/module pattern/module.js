const Cafee = (() => {
	let money = 10;
	//Приватние методы
	const countMoney = (value) => {
		console.log('Кофе успешно продано');
		money += value;
	};
	const getCoffee = () => {
		console.log('Возьмите ваш кофе');
	};
	const payforCoffee = (value) => {
		countMoney(value);
	};
	//Публичный интерефейс
	return {
		getCoffee: getCoffee,
		payForCoffee: payforCoffee,
	};
})();

Cafee.getCoffee();
Cafee.payForCoffee(5);
