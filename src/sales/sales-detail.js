'use strict'

var BaseModel = require('capital-models').BaseModel;

module.exports = class SalesDetail extends BaseModel {
    constructor(source) {
        super('sales-type', '1.0.0');

        // Define properties.  
        this.paymentType = '';
        this.voucherId = {};
        this.voucher = {};
        this.bankId = {};
        this.bank = {};
        this.cardTypeId = {};
        this.cardType = {};
        this.card = '';
        this.cardNumber = '';
        this.cardName = ''; 
        this.cashAmount = 0; 
        this.cardAmount = 0; 

        this.copy(source);
    }
}