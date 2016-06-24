'use strict'

var MongoModel = require('capital-models').MongoModel;
var ArticleVariant = require('../article/article-variant');

module.exports = class InventoryMovement extends MongoModel {
    constructor(source) {
        super('inventory-movement', '1.0.0');

        // Define properties. 
        this.stockTrxId = {};
        this.storageId = {};
        this.date = new Date();
        this.articleVariantId = {};
        this.articleVariant = new ArticleVariant();
        this.before = 0;
        this.quantity = 0;
        this.after = 0;

        this.copy(source);
    }
}