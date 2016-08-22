'use strict';

var BaseModel = require('capital-models').BaseModel;

module.exports = class Item extends BaseModel {
    constructor(source) {
        super('item', '1.0.0');

        // Define properties.
        this.code = '';
        this.name = '';
        this.description = '';

        this.items = [];
        this.tags = '';

        this.copy(source);
    }
}