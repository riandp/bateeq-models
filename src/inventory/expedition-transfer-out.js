'use strict'

var BaseModel = require('capital-models').BaseModel;

module.exports = class ExpeditionTransferOut extends BaseModel {
    constructor(source) {
        super('expedition-transfer-out', '1.0.0');

        // Define properties.  
        this.transferOutDocumentId = {};
        this.transferOutDocument = {};  

        this.copy(source);
    }
}