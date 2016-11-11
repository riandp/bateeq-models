'use strict'

var BaseModel = require('capital-models').BaseModel; 

module.exports = class PromoReward extends BaseModel {
    constructor(source) {
        super('promo-reward', '1.0.0');
   
        this.type = '';
        this.rewards = [];
        
        this.copy(source);
    }
}