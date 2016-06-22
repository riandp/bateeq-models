'use strict'

var MongoModel = require('capital-models').MongoModel;

class StockItem extends MongoModel {
    constructor(source) {
        super('stock-item', '1.0.0');

        // Define properties.  
        this.itemId = {};
        this.itemType = '';
        this.quantity = 0;

        this.copy(source);
    }
}