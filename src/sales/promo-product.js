'use strict'

var BaseModel = require('capital-models').BaseModel; 

module.exports = class PromoProduct extends BaseModel {
    constructor(source) {
        super('promo-product', '1.0.0');
    
        this.itemId = {};
        this.item = {};
        this.promoDiscount = {};
        
        this.copy(source);
    }
}