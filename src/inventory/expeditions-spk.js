'use strict'

var BaseModel = require('capital-models').BaseModel;

module.exports = class ExpeditionsSpk extends BaseModel {
    constructor(source) {
        super('expeditions-spk', '1.0.0');

        // Define properties.  
        this.spkDocumentId = {};
        this.spkDocument = {}; 
        this.quantity = 0;
        this.remark = '';

        this.copy(source);
    }
}