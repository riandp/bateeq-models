var validate = require('../src/validator').posmaster;

it("#01. Bank should valid", function(){
    var Bank = require('../src/pos-master/bank');
    validate.bank(new Bank());
})

it("#02. CardType should valid", function(){
    var CardType = require('../src/pos-master/card-type');
    validate.cardType(new CardType());
})

it("#03. PaymentType should valid", function(){
    var PaymentType = require('../src/pos-master/payment-type');
    validate.paymentType(new PaymentType());
})
 