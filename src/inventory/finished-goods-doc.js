'use strict'

var BaseModel = require('capital-models').BaseModel;

module.exports = class FinishedGoods extends BaseModel {
    constructor(source) {
        super('finished-goods', '1.0.0');

        // Define properties.
        this.code = '';
        this.transferInDocumentId = {};
        this.transferInDocument = {};
        this.transferOutDocumentId = {};
        this.transferOutDocument = {};
        this.storageId = {};
        this.date = new Date();
        
        this.copy(source);
    }
}