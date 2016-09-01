'use strict'

var BaseModel = require('capital-models').BaseModel;

module.exports = class FinishedGoods extends BaseModel {
    constructor(source) {
        super('finished-goods', '1.0.0');

        // Define properties.
        
        this.articleId = {};
        this.code = '';
        this.name = '';
        this.description = '';
        this.uom = '';
        this.tags = '';

        this.domesticCOGS = 0;
        this.domesticWholesale = 0;
        this.domesticRetail = 0;
        this.domesticSale = 0;

        this.internationalCOGS = 0;
        this.internationalWholesale = 0;
        this.internationalRetail = 0;
        this.internationalSale = 0;
        
        this.components = [];
        this.pictures = [];

        this.copy(source);
    }
}