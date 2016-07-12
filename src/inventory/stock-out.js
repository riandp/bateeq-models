'use strict'

var BaseModel = require('capital-models').BaseModel;

module.exports = class StockOut extends BaseModel {
    constructor(source) {
        super('stock-out', '1.0.0');

        // Define properties.
        this.code = '';
        this.reference = '';
        this.storageId = {};
        this.date = new Date();
        
        this.details = [];

        this.copy(source);
    }
}