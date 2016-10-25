'use strict'

var BaseModel = require('capital-models').BaseModel;
//var ArticleVariant = require('../core/article/article-variant');

module.exports = class PosPaymentItem extends BaseModel {
    constructor(source) {
        super('pos-payment-item', '1.0.0');

        // Define properties.  
        this.articleVariantId = {};
        this.articleVariant = {};
        this.size = '';
        this.quantity = 0;
        this.price = 0;
        this.discount1 = 0;
        this.discount2 = 0;
        this.discountNominal = 0;
        this.margin = 0;
        this.specialDiscount = 0;
        this.total = 0;

        this.copy(source);
    }
}