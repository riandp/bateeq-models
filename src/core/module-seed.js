'use strict'

var BaseModel = require('capital-models').BaseModel;

module.exports = class ModuleSeed extends BaseModel {
    constructor(source) {
        super('module-seed', '1.0.0');

        // Define properties.  
        this.moduleId = {};
        this.module = {};
        this.year = 0;
        this.month = 0;
        this.seed = 0;

        this.copy(source);
    }
}