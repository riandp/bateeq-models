'use strict'

var BaseModel = require('capital-models').BaseModel;

module.exports = class FinishedGoods extends BaseModel {
    constructor(source) {
        super('finished-goods', '1.0.0');

        // Define properties.
        this.code = '';
        this.name = '';
        this.description = '';
        
        this.pictures = [];

        this.domesticCOGS = 0;
        this.domesticWholesale = 0;
        this.domesticRetail = 0;
        this.domesticSale = 0;

        this.internationalCOGS = 0;
        this.internationalWholesale = 0;
        this.internationalRetail = 0;
        this.internationalSale = 0;
        
        this.items = [];

        this.copy(source);
    }
}