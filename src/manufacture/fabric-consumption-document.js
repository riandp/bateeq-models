'use strict'

var BaseModel = require('capital-models').BaseModel;

module.exports = class FabricConsumptionDocument extends BaseModel {
    constructor(source) {
        super('fabric-consumption-document', '1.0.0');

        // Define properties.
        this.code = '';
        this.date = new Date();

        this.items = [];
        this.remark = '';

        this.copy(source);
    }
}