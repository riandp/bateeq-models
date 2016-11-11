'use strict'

var BaseModel = require('capital-models').BaseModel; 

module.exports = class PromoCriteriaPackage extends BaseModel {
    constructor(source) {
        super('promo-criteria-package', '1.0.0');
    
        this.itemId = {};
        this.item = {};
        
        this.copy(source);
    }
}