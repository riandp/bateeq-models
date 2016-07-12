'use strict';

var BaseModel = require('capital-models').BaseModel;

module.exports = class MaterialCategory extends BaseModel {
    constructor(source) {
        super('material-category', '1.0.0');

        // Define properties.
        this.code = '';
        this.name = '';
        this.description = '';

        this.copy(source);
    }
}