'use strict'

var BaseModel = require('capital-models').BaseModel; 

module.exports = class PaymentType extends BaseModel {
    constructor(source) {
        super('payment-type', '1.0.0');
  
        this.code = ''; 
        this.name = ''; 
        this.description = ''; 
        
        this.copy(source);
    }
}