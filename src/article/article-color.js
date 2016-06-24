'use strict'

var MongoModel = require('capital-models').MongoModel;

module.exports = class ArticleColor extends MongoModel {
    constructor(source) {
        super('article-color', '1.0.0');

        // Define properties.
        this.code = '';
        this.name = '';
        this.description = '';

        this.copy(source);
    }
}