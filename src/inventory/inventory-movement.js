'use strict'

var MongoModel = require('capital-models').MongoModel;

class InventoryMovement extends MongoModel {
    constructor(source) {
        super('inventory-movement', '1.0.0');

        // Define properties. 
        this.stockTrxId = {};
        this.storageId = {};
        this.itemId = {};
        this.itemType = '';
        this.before = 0;
        this.quantity = 0;
        this.after = 0;

        this.copy(source);
    }
}