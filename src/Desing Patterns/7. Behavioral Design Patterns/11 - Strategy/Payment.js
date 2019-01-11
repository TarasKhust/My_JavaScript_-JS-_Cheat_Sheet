const PaymentStrategy = require('./PaymentStrategy');

class Payment{

    constructor(strategy='Card'){
        this.strategy = PaymentStrategy[strategy];
    }

    changeStrategy(newStrategy){
        this.strategy = PaymentStrategy[newStrategy];
        console.log("***** the payment strategy has benn changed ******");
    }

    showPaymentMethod(user){
        this.strategy(user);
    }
}

module.exports = Payment;