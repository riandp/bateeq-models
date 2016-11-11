'use strict'

var BaseModel = require('capital-models').BaseModel; 

var Store = require('../master/store');
var Criteria = require('./promo-criteria');
var Reward = require('./promo-reward');

module.exports = class Promo extends BaseModel {
    constructor(source) {
        super('promo', '1.0.0');
   
        this.code = '';
        this.name = '';
        this.description = '';
        this.validFrom = new Date();
        this.validTo = new Date;
        this.stores = [];
        this.criteria = {};
        this.reward = {};
        
        this.copy(source);
         
        var _stores = [];
        for(var store of this.stores)
        {
            _stores.push(new Store(store));
        }
        this.criteria = new Criteria(this.criteria);
        this.reward = new Reward(this.reward);
    }
}