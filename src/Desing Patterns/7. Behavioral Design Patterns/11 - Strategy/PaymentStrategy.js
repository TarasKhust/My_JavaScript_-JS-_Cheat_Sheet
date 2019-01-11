class PaymentStrategy{

   static Card(user){
        console.log(`${user} will pay with a credit card`);
    }

    static Paypal(user){
        console.log(`${user} will pay with Paypal`);
    }

    static AnotherMethod(user){
        console.log(`${user} will pay with another method`);
    }
}

module.exports = PaymentStrategy;