'use strict'

var BaseModel = require('capital-models').BaseModel;

module.exports = class Account extends BaseModel {
    constructor(source) {
        super('account', '1.0.0');

        // Define properties.  
        this.username = '';
        this.password = '';
        this.isLocked = false;
        this.config = {};

        this.copy(source);
    }
}