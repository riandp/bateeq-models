'use strict'

var BaseModel = require('capital-models').BaseModel;

var ArticleType = require('./article-type');
var ArticleBrand = require('./article-brand');
var ArticleOrigin = require('./article-origin');
var ArticleCategory = require('./article-category');
var ArticleCounter = require('./article-counter');
var ArticleSubCounter = require('./article-sub-counter');
var ArticleTheme = require('./article-theme');
var ArticleMaterial = require('./article-material');
var ArticleSeason = require('./article-season');
var ArticleMotif= require('./article-motif');
var ArticleColor= require('./article-color');

module.exports = class Article extends BaseModel {
    constructor(source) {
        super('article', '1.0.0');

        // Define properties.
        this.code = '';
        this.name = '';
        this.description = '';
        
        this.realizationOrder = ''; 
        
        this.version = '1.0';
    
        this.typeId = {};
        this.type = new ArticleType();
        
        this.brandId = {};
        this.brand = new ArticleBrand();
        
        this.originId = {};
        this.origin = new ArticleOrigin();
        
        this.categoryId = {};
        this.category = new ArticleCategory();
        
        this.counterId = {};
        this.counter = new ArticleCounter();
        
        this.subCounterId = {};
        this.subCounter = new ArticleSubCounter();
        
        this.materialId = {};
        this.material = new ArticleMaterial();
        
        this.themeId = {};
        this.theme = new ArticleTheme();
        
        this.seasonId = {};
        this.season = new ArticleSeason();
        
        this.motifId = {};
        this.motif = new ArticleMotif();
        
        this.colorId = {};
        this.color = new ArticleColor();
        
        this.launch = new Date();
        this.weight = 0;
        this.status = '';
        this.approved = false;
        this.rejected = false;
        this.locked = false;
 
        this.tags = [];
        this.sizes = [];
        this.variants = [];
        
        this.calculation = {};
        this.copy(source);
    }
}