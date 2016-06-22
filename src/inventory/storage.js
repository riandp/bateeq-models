'use strict'

var MongoModel = require('capital-models').MongoModel;

class Storage extends MongoModel {
    constructor(source) {
        super('storage', '1.0.0');

        // Define properties.
        this.code = '';
        this.name = '';
        this.address = '';
        this.phone = '';
        
        this.copy(source);
    }
}