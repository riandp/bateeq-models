'use strict';

var MongoModel = require('capital-models').MongoModel;
var ArticleVariant = require('../article/article-variant');

module.exports = class Inventory extends MongoModel {
    constructor(source) {
        super('inventory', '1.0.0');

        // Define properties. 
        this.storageId = {}; 
        this.articleVariantId = {};
        this.articleVariant = new ArticleVariant();
        this.quantity = 0;

        this.copy(source);
    }
}