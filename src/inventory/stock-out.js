'use strict'

var MongoModel = require('capital-models').MongoModel;

class StockOut extends MongoModel {
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