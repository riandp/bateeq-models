'use strict'

var BaseModel = require('capital-models').BaseModel;

module.exports = class ArticleCategory extends BaseModel {
    constructor(source) {
        super('article-category', '1.0.0');

        // Define properties.
        this.code = '';
        this.name = '';
        this.description = '';

        this.copy(source);
    }
}