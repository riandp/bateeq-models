'use strict'

var BaseModel = require('capital-models').BaseModel;

module.exports = class ArticleCostCalculation extends BaseModel {
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