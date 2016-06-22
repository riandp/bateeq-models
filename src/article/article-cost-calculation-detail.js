'use strict'

var MongoModel = require('capital-models').MongoModel;

class ArticleCostCalculationDetail extends MongoModel {
    constructor(source) {
        super('article-cost-calculation-detail', '1.0.0');

        // Define properties.

        this.materialId = {};
        this.material = {};
        this.quantity = 0;
        this.description = '';
        this.price = 0;
        this.total = 0;
        this.conversionUnit = '';
        this.conversionRate = 1;



        this.copy(source);
    }
}