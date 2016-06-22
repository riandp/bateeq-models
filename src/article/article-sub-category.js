'use strict'

var MongoModel = require('capital-models').MongoModel;

class ArticleSubCategory extends MongoModel {
    constructor(source) {
        super('article-sub-category', '1.0.0');

        // Define properties.
        this.code = '';
        this.name = '';
        this.description = '';

        this.copy(source);
    }
}