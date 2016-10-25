'use strict'

var BaseModel = require('capital-models').BaseModel;

module.exports = class Store extends BaseModel {
    constructor(source) {
        super('store', '1.0.0');

        // Define properties.
        this.code = '';
        this.name = '';
        this.description = '';
        this.storageId = {};
        this.storage = {};
        this.salesCategoryId = {};
        this.salesCategory = {};
        
        this.copy(source);
    }
}