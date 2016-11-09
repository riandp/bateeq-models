'use strict'

var BaseModel = require('capital-models').BaseModel; 

module.exports = class PromoRewardDiscountProduct extends BaseModel {
    constructor(source) {
        super('promo-reward-special-price', '1.0.0');
   
        this.quantity1 = 0;
        this.quantity2 = 0;
        this.quantity3 = 0;
        this.quantity4 = 0;
        this.quantity5 = 0;
        
        this.copy(source);
    }
}