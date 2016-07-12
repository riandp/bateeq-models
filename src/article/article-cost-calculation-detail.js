'use strict'

var BaseModel = require('capital-models').BaseModel;
var Article = require('./article');

module.exports = class ArticleCostCalculationDetail extends BaseModel {
    constructor(source) {
        super('article-cost-calculation-detail', '1.0.0');

        // Define properties.

        this.articleId = {};
        this.article = new Article();
        this.quantity = 0;
        this.remark = '';
        this.price = 0;
        this.total = 0;
        this.conversionUnit = '';
        this.conversionRate = 1;



        this.copy(source);
    }
} 