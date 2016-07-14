'use strict'

var BaseModel = require('capital-models').BaseModel;
var TransferInItem = require('./transfer-in-item');

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
        
        var _items = [];
        for(var item of this.items)
        {
            _items.push(new TransferInItem(item));
        }
        this.items = _items;
    }
}