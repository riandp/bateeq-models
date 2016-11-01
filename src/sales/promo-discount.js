'use strict'

var BaseModel = require('capital-models').BaseModel; 

module.exports = class PromoDiscount extends BaseModel {
    constructor(source) {
        super('promo-discount', '1.0.0');
   
        this.reward = ''; //Discount Product
        this.unit = ''; //Percentage, Nominal
        this.discount1 = 0; 
        this.discount2 = 0; 
        this.nominal = 0; 
        
        this.rewardTypeId = {};
        this.rewardType = {};
        
        this.copy(source); 
    }
}