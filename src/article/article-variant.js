'use strict'

var BaseModel = require('capital-models').BaseModel;

module.exports = class ArticleVariant extends BaseModel {
    constructor(source) {
        super('article-variant', '1.0.0');

        // Define properties.
        this.articleId = {};
        this.code = '';
        this.name = '';
        this.description = '';
        
        this.sizeId = '';
        this.size = '';
        
        this.pictures = [];

        this.domesticCOGS = 0;
        this.domesticWholesale = 0;
        this.domesticRetail = 0;
        this.domesticSale = 0;

        this.internationalCOGS = 0;
        this.internationalWholesale = 0;
        this.internationalRetail = 0;
        this.internationalSale = 0;

        this.copy(source);
    }
}