'use strict'

var MongoModel = require('capital-models').MongoModel;

module.exports = class ArticleVariant extends MongoModel {
    constructor(source) {
        super('article-variant', '1.0.0');

        // Define properties.
        this.articleId = {};
        this.code = ''; 
        this.name = ''; 
        this.description = '';
        this.size = '';
        this.color = '';
        this.pictures = [];

        this.copy(source);
    }
}