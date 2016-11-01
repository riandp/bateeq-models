'use strict'

var BaseModel = require('capital-models').BaseModel;
var Item = require('../master/item');

module.exports = class FinishingItem extends BaseModel {
    constructor(source) {
        super('finishing-item', '1.0.0');

        // Define properties.
        this.itemId = {};
        this.item = new Item();
        this.quantity = 0;

        this.copy(source);
    }
}