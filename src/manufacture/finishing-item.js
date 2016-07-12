'use strict'

var BaseModel = require('capital-models').BaseModel;
var ArticleVariant = require('../article/article-variant');

module.exports = class FinishingItem extends BaseModel {
    constructor(source) {
        super('finishing-item', '1.0.0');

        // Define properties.
        this.articleVariantId = {};
        this.articleVariant = new ArticleVariant();
        this.quantity = 0;

        this.copy(source);
    }
}