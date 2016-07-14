'use strict'

var BaseModel = require('capital-models').BaseModel;
var ArticleVariant = require('../article/article-variant');

module.exports = class StockItem extends BaseModel {
    constructor(source) {
        super('transfer-in-item', '1.0.0');

        // Define properties.  
        this.articleVariantId = {};
        this.articleVariant = new ArticleVariant();
        this.quantity = 0;
        this.remark = '';

        this.copy(source);
    }
}