'use strict'

var BaseModel = require('capital-models').BaseModel;
//var Voucher = require('../core/article/article-variant');
//var Bank = require('../core/article/article-variant');

module.exports = class PosPaymentDetail extends BaseModel {
    constructor(source) {
        super('pos-payment-type', '1.0.0');

        // Define properties.  
        this.paymentTypeId = {};
        this.paymentType = {};
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