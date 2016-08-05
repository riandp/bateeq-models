'use strict'

var BaseModel = require('capital-models').BaseModel;

module.exports = class ExpeditionSpk extends BaseModel {
    constructor(source) {
        super('expedition-spk', '1.0.0');

        // Define properties.  
        this.spkDocumentId = {};
        this.spkDocument = {}; 
        this.quantity = 0;
        this.remark = '';

        this.copy(source);
    }
}