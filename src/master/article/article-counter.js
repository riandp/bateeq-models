'use strict'

var BaseModel = require('capital-models').BaseModel;

module.exports = class ArticleCounter extends BaseModel {
    constructor(source) {
        super('article-counter', '1.0.0');

        // Define properties.
        this.code = '';
        this.name = '';
        this.description = '';
        
        this.subCounters = [];

        this.copy(source);
    }
}