'use strict'

var BaseModel = require('capital-models').BaseModel;

module.exports = class Module extends BaseModel {
    constructor(source) {
        super('module', '1.0.0');

        // Define properties.  
        this.code = '';
        this.name = '';
        this.description = '';
        this.config = {};

        this.copy(source);
    }
}