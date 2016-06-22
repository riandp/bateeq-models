'use strict'

var MongoModel = require('capital-models').MongoModel;

class ArticleSeason extends MongoModel {
    constructor(source) {
        super('article-season', '1.0.0');

        // Define properties.
        this.code = '';
        this.name = '';
        this.description = '';

        this.copy(source);
    }
}