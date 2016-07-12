'use strict'

var BaseModel = require('capital-models').BaseModel;

module.exports = class Material extends BaseModel {
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