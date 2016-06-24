'use strict'

var MongoModel = require('capital-models').MongoModel;

module.exports = class StockIn extends MongoModel {
    constructor(source) {
        super('stock-in', '1.0.0');

        // Define properties.
        this.code = '';
        this.reference = '';
        this.storageId = {};
        this.date = new Date();

        this.details = [];

        this.copy(source);
    }
}