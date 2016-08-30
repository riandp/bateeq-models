'use strict'

var BaseModel = require('capital-models').BaseModel;

module.exports = class ArticleColor extends BaseModel {
    constructor(source) {
        super('article-color', '1.0.0');

        // Define properties.
        this.code = '';
        this.name = '';
        this.description = '';

        this.copy(source);
    }
}