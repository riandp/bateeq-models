var validate = require('../src/validator').master;

it("#01. Item should valid", function(){
    var Item = require('../src/master/item');
    validate.item(new Item());
})

it("#01. FinishedGoods should valid", function(){
    var FinishedGoods = require('../src/master/finished-goods');
    validate.finishedGoods(new FinishedGoods());
})