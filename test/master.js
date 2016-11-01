var validate = require('../src/validator').master;

it("#01. Item should valid", function(){
    var Item = require('../src/master/item');
    validate.item(new Item());
})

it("#02. FinishedGoods should valid", function(){
    var FinishedGoods = require('../src/master/finished-goods');
    validate.finishedGoods(new FinishedGoods());
})

it("#03. Material should valid", function(){
    var Material = require('../src/master/material');
    validate.material(new Material());
})
 
it("#04. Component should valid", function(){
    var Component = require('../src/master/component');
    validate.component(new Component());
})
  
it("#05. Bank should valid", function(){
    var Bank = require('../src/master/bank');
    validate.bank(new Bank());
})

it("#06. CardType should valid", function(){
    var CardType = require('../src/master/card-type');
    validate.cardType(new CardType());
}) 

it("#07. Store should valid", function(){
    var Store = require('../src/master/store');
    validate.store(new Store());
}) 

it("#08. Module should valid", function(){
    var Module = require('../src/master/module');
    validate.module(new Module());
}) 