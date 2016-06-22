'use strict'

var MongoModel = require('capital-models').MongoModel;

class Article extends MongoModel {
    constructor(source) {
        super('article', '1.0.0');

        // Define properties.
        this.buyerId = {};
        this.code = '';
        this.name = '';
        this.version = '1.0';
        
        this.originId = {};
        this.origin = {};
        
        this.categoryId = {};
        this.category = {};
        
        this.subCategoryId = {};
        this.subCategory = {};
        
        this.styleId = {};
        this.style = {};
        
        this.seasonId = {};
        this.season = {};
        
        this.motifId = {};
        this.motif = {};
        
        this.lauch = new Date();
        this.weight = 0;
        this.status = '';
        this.approved = false;
        this.rejected = false;
        this.locked = false;

        this.calculation = {};
        this.colors = [];
        this.sizes = [];
        this.barcodes = [];

        this.copy(source);
    }
}