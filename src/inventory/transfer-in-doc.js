'use strict'

var BaseModel = require('capital-models').BaseModel;

module.exports = class TransferInDoc extends BaseModel {
    constructor(source) {
        super('transfer-in-doc', '1.0.0');

        // Define properties.
        this.code = '';
        this.date = new Date();
        
        this.reference = '';
        
        this.sourceId = {};
        this.source = {};
        
        this.destinationId = {};
        this.destination = {};

        this.items = [];
        this.remark = '';

        this.copy(source);
    }
}