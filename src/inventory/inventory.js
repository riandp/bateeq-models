'use strict';

var BaseModel = require('capital-models').BaseModel;
var ArticleVariant = require('../article/article-variant');

module.exports = class Inventory extends BaseModel {
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