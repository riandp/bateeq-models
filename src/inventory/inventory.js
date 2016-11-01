'use strict';

var BaseModel = require('capital-models').BaseModel;
var Storage = require('../inventory/storage');
var Item = require('../master/item');

module.exports = class Inventory extends BaseModel {
    constructor(source) {
        super('inventory', '1.0.0');

        // Define properties. 
        this.storageId = {}; 
        this.storage = new Storage();
        this.itemId = {};
        this.item = new Item();
        this.quantity = 0;

        this.copy(source);
    }
}