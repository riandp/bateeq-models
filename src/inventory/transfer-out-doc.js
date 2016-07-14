'use strict'

var BaseModel = require('capital-models').BaseModel;

module.exports = class TransferOutDoc extends BaseModel {
    constructor(source) {
        super('transfer-out-doc', '1.0.0');

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