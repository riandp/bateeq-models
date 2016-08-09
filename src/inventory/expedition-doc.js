'use strict'

var BaseModel = require('capital-models').BaseModel; 
var ExpeditionSpk = require('./expedition-spk');
var ExpeditionTransferOut = require('./expedition-transfer-out');

module.exports = class Expeditions extends BaseModel {
    constructor(source) {
        super('expedition-doc', '1.0.0');

        // Define properties.
        this.code = '';
        this.date = new Date();
        this.expedition = '';
        this.weight = '';
        // this.transferOutDocumentId = {};
        // this.transferOutDocument = {};
        this.transferOutDocuments = [];
        
        // this.spkDocumentId = {};
        // this.spkDocuments = {};
        this.spkDocuments = [];
        
        this.copy(source);
        
        var _transferOutDocuments = [];
        for(var transferOutDocument of this.transferOutDocuments)
        {
            _transferOutDocuments.push(new ExpeditionTransferOut(transferOutDocument));
        }
        this.transferOutDocuments = _transferOutDocuments;
        
        var _spkDocuments = [];
        for(var spkDocument of this.spkDocuments)
        {
            _spkDocuments.push(new ExpeditionSpk(spkDocument));
        }
        this.spkDocuments = _spkDocuments;
    }
}