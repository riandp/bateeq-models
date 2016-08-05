'use strict'

var BaseModel = require('capital-models').BaseModel;
var ArticleVariant = require('../core/article/article-variant');

module.exports = class SPKItem extends BaseModel {
    constructor(source) {
        super('spk-item', '1.0.0');

        // Define properties.  
        this.articleVariantId = {};
        this.articleVariant = {};
        this.quantity = 0;
        this.remark = '';

        this.copy(source);
    }
}