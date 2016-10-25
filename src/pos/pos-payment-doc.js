'use strict'

var BaseModel = require('capital-models').BaseModel;
var PosPaymentItem = require('./pos-payment-item');
//var PosPaymentType = require('../pos-payment-type');
//var Storage = require('../core/inventory/storage');

module.exports = class PosPaymentDoc extends BaseModel {
    constructor(source) {
        super('pos-payment-doc', '1.0.0');

        // Define properties.
        this.code = '';
        this.date = new Date();
        this.totalProduct = 0;
        this.subTotal = 0;
        this.discount = 0;
        this.grandTotal = 0; 
        this.reference = '';
        
        this.storeId = {};
        this.store = {};
         
        this.items = [];
        this.paymentDetail = {};
        this.remark = '';

        this.copy(source);
        
        var _items = [];
        for(var item of this.items)
        {
            _items.push(new PosPaymentItem(item));
        }
        this.items = _items;
    }
}