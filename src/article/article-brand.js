'use strict'

var BaseModel = require('capital-models').BaseModel;

module.exports = class ArticleBrand extends BaseModel {
    constructor(source) {
        super('article-brand', '1.0.0');

        // Define properties.
        this.code = '';
        this.name = '';
        this.description = '';

        this.copy(source);
    }
}