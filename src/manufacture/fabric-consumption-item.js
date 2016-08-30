'use strict'

var BaseModel = require('capital-models').BaseModel;
var Article = require('../master/article/article');
var Item = require('../master/item');

module.exports = class FabricConsumptionItem extends BaseModel {
    constructor(source) {
        super('fabric-consumption-item', '1.0.0');

        // Define properties.
        this.itemId = {};
        this.item = new Item();
        
        this.quantity = 0;
        this.uom = '';
        this.remark = '';

        this.copy(source);
    }
}