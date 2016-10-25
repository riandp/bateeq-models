'use strict'

var BaseModel = require('capital-models').BaseModel; 

var Store = require('../inventory/store');
var PromoProduct = require('./promo-product');

module.exports = class Promo extends BaseModel {
    constructor(source) {
        super('promo-doc', '1.0.0');
   
        this.code = ''; 
        this.name = ''; 
        this.description = ''; 
        this.validDateFrom = new Date(); 
        this.validDateTo = new Date; 
        
        this.stores = [];
        this.promoProducts = [];
        
        this.copy(source);
        
        var _stores = [];
        for(var store of this.stores)
        {
            _stores.push(new Store(store));
        }
        
        var _promoProducts = [];
        for(var promoProduct of this.promoProducts)
        {
            _promoProducts.push(new PromoProduct(promoProduct));
        }
    }
}