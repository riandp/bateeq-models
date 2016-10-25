var validate = require('../src/validator').pos;

it("#01. PaymentDoc should valid", function(){
    var PaymentDoc = require('../src/pos/pos-payment-doc');
    validate.paymentDoc(new PaymentDoc());
}) 