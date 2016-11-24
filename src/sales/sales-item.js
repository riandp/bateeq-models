'use strict'

var BaseModel = require('capital-models').BaseModel; 

module.exports = class SalesItem extends BaseModel {
    constructor(source) {
        super('sales-item', '1.0.0');

        // Define properties.  
        this.itemId = {};
        this.item = {};
        this.promoId = {};
        this.promo = {};
        this.size = '';
        this.quantity = 0;
        this.price = 0;
        this.discount1 = 0;
        this.discount2 = 0;
        this.discountNominal = 0;
        this.margin = 0;
        this.specialDiscount = 0;
        this.total = 0;
        this.isReturn = false; 
        this.returnItems = []; 
 
        this.copy(source);
        
        var _returnItems = [];
        for(var returnItem of this.returnItems)
        {
            _returnItems.push(new SalesItem(returnItem));
        }
        this.returnItems = _returnItems;
    }
}