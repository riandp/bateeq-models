'use strict'

var BaseModel = require('capital-models').BaseModel;
var Shift = require('./store-shift');

module.exports = class Store extends BaseModel {
    constructor(source) {
        super('store', '1.0.0');

        // Define properties.
        this.code = '';
        this.name = '';
        this.description = '';
        this.salesTarget = 0;
        this.storageId = {};
        this.storage = {};
        this.salesCategoryId = {};
        this.salesCategory = {};
        this.address = '';
        this.phone = '';
        this.salesCapital = 0;
        this.shifts = [];


        this.copy(source);
        
        var _shifts = [];
        for(var shift of this.shifts)
        {
            _shifts.push(new Shift(shift));
        }
        this.shifts = _shifts;
    }
}