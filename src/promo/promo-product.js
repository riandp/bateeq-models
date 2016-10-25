'use strict'

var BaseModel = require('capital-models').BaseModel; 

var PromoDiscount = require('./promo-discount');
module.exports = class PromoProduct extends BaseModel {
    constructor(source) {
        super('promo-product', '1.0.0');
    
        this.articleVariantId = {};
        this.articleVariant = {};
        this.promoDiscount = {};
        
        this.copy(source);
    }
}