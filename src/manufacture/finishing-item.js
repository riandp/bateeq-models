'use strict'

var MongoModel = require('capital-models').MongoModel;

class FinishingItem extends MongoModel {
    constructor(source) {
        super('finishing-item', '1.0.0');

        // Define properties.
        this.articleId = {};
        this.articleBarcode = '';
        this.quantity = 0;

        this.copy(source);
    }
}