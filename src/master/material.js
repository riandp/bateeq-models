'use strict'

var Item = require('./item');

module.exports = class Material extends Item {
    constructor(source) {
        super(source, '1.0.0', 'material');

        // Define properties.

        this.copy(source);
    }
}