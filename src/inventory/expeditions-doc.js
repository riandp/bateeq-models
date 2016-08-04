'use strict'

var BaseModel = require('capital-models').BaseModel; 
var ExpeditionsSpk = require('./expeditions-spk');

module.exports = class Expeditions extends BaseModel {
    constructor(source) {
        super('expeditions', '1.0.0');

        // Define properties.
        this.code = '';
        this.date = new Date();
        this.expedition = '';
        this.weight = '';
        this.transferOutDocumentId = {};
        this.transferOutDocument = {};
        // this.spkDocumentId = {};
        // this.spkDocuments = {};
        this.spkDocuments = [];
        
        this.copy(source);
        
        var _spkDocuments = [];
        for(var spkDocument of this.spkDocuments)
        {
            _spkDocuments.push(new ExpeditionsSpk(spkDocument));
        }
        this.spkDocuments = _spkDocuments;
    }
}