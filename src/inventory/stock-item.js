'use strict'

var MongoModel = require('capital-models').MongoModel;
var ArticleVariant = require('../article/article-variant');

module.exports = class StockItem extends MongoModel {
    constructor(source) {
        super('stock-item', '1.0.0');

        // Define properties.  
        this.articleVariantId = {};
        this.articleVariant = new ArticleVariant();
        this.quantity = 0;

        this.copy(source);
    }
}