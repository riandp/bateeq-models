'use strict'

var MongoModel = require('capital-models').MongoModel;

module.exports = class ArticleCostCalculation extends MongoModel {
    constructor(source) {
        super('article-cost-calculation', '1.0.0');

        // Define properties.
        this.code = '';
        this.name = '';
        this.description = '';
        
        this.details = [];

        this.copy(source);
    }
}