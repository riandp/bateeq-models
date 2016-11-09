'use strict'

var BaseModel = require('capital-models').BaseModel; 

module.exports = class PromoCriteriaSelectedProduct extends BaseModel {
    constructor(source) {
        super('promo-criteria-selected-product', '1.0.0');
    
        this.itemId = {};
        this.item = {};
        this.minimumQuantity = 0;
        
        this.copy(source);
    }
}