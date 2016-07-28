var validate = require('./validator').core;

it("#01. Module should valid", function(){
    var Module = require('../src/core/module');
    validate.module(new Module());
})

it("#01. ModuleSeed should valid", function(){
    var ModuleSeed = require('../src/core/module-seed');
    validate.moduleSeed(new ModuleSeed());
})