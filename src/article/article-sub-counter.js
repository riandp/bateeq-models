'use strict'

var BaseModel = require('capital-models').BaseModel;
var ArticleCounter = require('./article-counter');

module.exports = class ArticleSubCounter extends BaseModel {
    constructor(source) {
        super('article-sub-counter', '1.0.0');

        // Define properties.
        this.code = '';
        this.name = '';
        this.description = '';
        
        this.counterId = {};
        this.counter = new ArticleCounter();

        this.copy(source);
    }
}