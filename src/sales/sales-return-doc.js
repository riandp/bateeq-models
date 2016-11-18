'use strict'

var BaseModel = require('capital-models').BaseModel;
var SalesDoc= require('./sales-doc');
var SalesReturnItem= require('./sales-return-item');

module.exports = class SalesReturnDoc extends BaseModel {
    constructor(source) {
        super('sales-return-doc', '1.0.0');

        // Define properties.
        this.code = '';
        this.date = new Date();
        this.salesDocId = {};
        this.salesDoc = {};
        this.salesDocReturnId = {};
        this.salesDocReturn = {};
        this.storeId = {};
        this.store = {};
        this.returnItems = [];
        
        this.copy(source);
        
        this.salesDoc = new SalesDoc(this.salesDoc);
        this.salesDocReturn = new SalesDoc(this.salesDocReturn);
        
        var _returnItems = [];
        for(var returnItem of this.returnItems)
        {
            _returnItems.push(new SalesReturnItem(returnItem));
        }
        this.returnItems = _returnItems;
    }
}