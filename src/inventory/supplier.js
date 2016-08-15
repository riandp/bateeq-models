'use strict'

var BaseModel = require('capital-models').BaseModel;

module.exports = class Supplier extends BaseModel {
    constructor(source) {
        super('supplier', '1.0.0');

        // Define properties.
        this.code = '';
        this.name = '';
        this.description = '';
        this.address = '';
        this.phone = '';
        
        this.copy(source);
    }
}