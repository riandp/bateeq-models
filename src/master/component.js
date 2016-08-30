'use strict';
var Item = require('./item');

var BaseModel = require('capital-models').BaseModel;

module.exports = class Component extends BaseModel {
    constructor(source) {
        super('component', '1.0.0');

        // Define properties.
        
        this.level = '';
        
        this.itemId = {};
        this.item = new Item();
        this.quantity = 0;
        this.uom = '';
        this.remark = '';

        this.copy(source);
    }
}