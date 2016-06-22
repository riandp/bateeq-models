'use strict'

var MongoModel = require('capital-models').MongoModel;

class Inventory extends MongoModel {
    constructor(source) {
        super('inventory', '1.0.0');

        // Define properties. 
        this.storageId = {};
        this.itemId = {};
        this.itemType = '';
        this.quantity = 0;

        this.copy(source);
    }
}