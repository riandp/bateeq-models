'use strict'

var MongoModel = require('capital-models').MongoModel;

module.exports = class Finishing extends MongoModel {
    constructor(source) {
        super('finishing', '1.0.0');

        // Define properties.
        this.code = '';
        this.date = new Date();
        this.items = [];
        
        this.copy(source);
    }
}