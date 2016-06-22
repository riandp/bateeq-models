'use strict'

var MongoModel = require('capital-models').MongoModel;

class ArticleBarcode extends MongoModel {
    constructor(source) {
        super('article-barcode', '1.0.0');

        // Define properties.
        this.code = ''; 
        this.picture = '';

        this.copy(source);
    }
}