'use strict'

var MongoModel = require('capital-models').MongoModel;

module.exports = class Material extends MongoModel {
    constructor(source) {
        super('material', '1.0.0');

        // Define properties.
        this.code = '';
        this.name = '';
        this.description = '';

        this.materialCategoryId = {};
        this.materialCategory = {};

        this.copy(source);
    }
}