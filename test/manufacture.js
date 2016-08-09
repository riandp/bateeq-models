var validate = require('../src/validator').manufacture;

it("#01. FinishingItem should valid", function(){
    var FinishingItem = require('../src/manufacture/finishing-item');
    validate.finishingItem(new FinishingItem());
}) 

it("#02. Finishing should valid", function(){
    var Finishing = require('../src/manufacture/finishing');
    validate.finishing(new Finishing());
})  