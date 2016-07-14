'use strict'

var BaseModel = require('capital-models').BaseModel;
var ArticleVariant = require('../article/article-variant');

module.exports = class StockItem extends BaseModel {
    constructor(source) {
        super('transfer-out-item', '1.0.0');

        // Define properties.  
        this.articleVariantId = {};
        this.articleVariant = new ArticleVariant();
        this.quantity = 0;
        this.remark = 0;

        this.copy(source);
    }
}