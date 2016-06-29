'use strict'

var MongoModel = require('capital-models').MongoModel;

var ArticleType = require('./article-type');
var ArticleOrigin = require('./article-origin');
var ArticleCategory = require('./article-category');
var ArticleSubCategory = require('./article-sub-category');
var ArticleStyle = require('./article-style');
var ArticleSeason = require('./article-season');
var ArticleMotif= require('./article-motif');

module.exports = class Article extends MongoModel {
    constructor(source) {
        super('article', '1.0.0');

        // Define properties.
        this.code = '';
        this.name = '';
        this.version = '1.0';
        
        this.typeId = {};
        this.type = new ArticleType();
        
        this.originId = {};
        this.origin = new ArticleOrigin();
        
        this.categoryId = {};
        this.category = new ArticleCategory();
        
        this.subCategoryId = {};
        this.subCategory = new ArticleSubCategory();
        
        this.styleId = {};
        this.style = new ArticleStyle();
        
        this.seasonId = {};
        this.season = new ArticleSeason();
        
        this.motifId = {};
        this.motif = new ArticleMotif();
        
        this.launch = new Date();
        this.weight = 0;
        this.status = '';
        this.approved = false;
        this.rejected = false;
        this.locked = false;

        this.color = '#FFFFFF';
        this.tags = [];
        this.sizes = [];
        this.variants = [];
        
        this.calculation = {};
        this.copy(source);
    }
}