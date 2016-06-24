'use strict'

var MongoModel = require('capital-models').MongoModel;

module.exports = class ArticleVariant extends MongoModel {
    constructor(source) {
        super('article-variant', '1.0.0');

        // Define properties.
        this.code = ''; 
        this.picture = [];

        this.copy(source);
    }
}