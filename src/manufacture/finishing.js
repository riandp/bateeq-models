'use strict'

var BaseModel = require('capital-models').BaseModel;

module.exports = class Finishing extends BaseModel {
    constructor(source) {
        super('finishing', '1.0.0');

        // Define properties.
        this.code = '';
        this.date = new Date();
        this.items = [];
        
        this.copy(source);
    }
}