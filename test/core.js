var validate = require('../src/validator').core;

it("#01. Module should valid", function(){
    var Module = require('../src/core/module');
    validate.module(new Module());
}) 