'use strict'

var BaseModel = require('capital-models').BaseModel;
var Article = require('../master/article/article');

module.exports = class CostCalculationArticle extends BaseModel {
    constructor(source) {
        super('cost-calculation-article', '1.0.0');

        // Define properties.
        this.articleId = {};
        this.article = new Article();

        this.items = [];
        this.remark = '';

        this.copy(source);
    }
}