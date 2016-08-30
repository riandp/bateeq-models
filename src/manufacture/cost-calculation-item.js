'use strict'

var BaseModel = require('capital-models').BaseModel;
var Article = require('../master/article/article');
var Item = require('../master/item');

module.exports = class CostCalculationItem extends BaseModel {
    constructor(source) {
        super('cost-calculation-item', '1.0.0');

        // Define properties.
        this.itemId = {};
        this.item = new Item();
        
        this.quantity = 0;
        this.uom = '';
        this.price = 0;
        this.total = 0;
        this.remark = '';

        this.copy(source);
    }
}