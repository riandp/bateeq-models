'use strict'

var MongoModel = require('capital-models').MongoModel;
var Article = require('./article');

module.exports = class ArticleCostCalculationDetail extends MongoModel {
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