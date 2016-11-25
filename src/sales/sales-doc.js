'use strict'

var BaseModel = require('capital-models').BaseModel;
var SalesItem = require('./sales-item');
var SalesDetail = require('./sales-detail');

module.exports = class SalesDoc extends BaseModel {
    constructor(source) {
        super('sales-doc', '1.0.0');

        // Define properties.
        this.code = '';
        this.date = new Date();
        this.totalProduct = 0;
        this.subTotal = 0;
        this.discount = 0;
        this.grandTotal = 0; 
        this.reference = '';
        this.shift = 0;
        
        this.storeId = {};
        this.store = {};
         
        this.items = [];
        this.salesDetail = {};
        this.remark = '';

        this.isVoid = false;

        this.copy(source);
        
        this.salesDetail = new SalesDetail(this.salesDetail);
        
        var _items = [];
        for(var item of this.items)
        {
            _items.push(new SalesItem(item));
        }
        this.items = _items;
    }
}