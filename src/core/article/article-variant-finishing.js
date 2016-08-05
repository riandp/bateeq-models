'use strict'

var BaseModel = require('capital-models').BaseModel;
var ArticleVariant = require('./article-variant');

module.exports = class ArticleVariantFinishing extends BaseModel {
    constructor(source) {
        super('article-variant-finishing', '1.0.0');

        // Define properties.
        this.articleVariantId = {};
        this.articleVariant = {};
        this.quantity = 0; 
        this.remark = '';

        this.copy(source);
    }
}