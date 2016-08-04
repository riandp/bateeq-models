'use strict'

var BaseModel = require('capital-models').BaseModel;
var SPKItem = require('./spk-item');

module.exports = class SPKDoc extends BaseModel {
    constructor(source) {
        super('spk-doc', '1.0.0');

        // Define properties.
        this.code = '';
        this.date = new Date();
        
        this.reference = '';
        
        this.sourceId = {};
        this.source = {};
        
        this.destinationId = {};
        this.destination = {};

        this.items = [];
        this.log = '';
        this.packingList = '';
        this.password=0;
        
        this.copy(source);
        
        var _items = [];
        for(var item of this.items)
        {
            _items.push(new SPKItem(item));
        }
        this.items = _items;
    }
}