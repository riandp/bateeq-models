'use strict'

var BaseModel = require('capital-models').BaseModel;
var Storage = require('../inventory/storage');
var ArticleVariant = require('../article/article-variant');

module.exports = class InventoryMovement extends BaseModel {
    constructor(source) {
        super('inventory-movement', '1.0.0');

        // Define properties. 
        this.inventoryId = {};
        this.storageId = {};
        this.storage = new Storage();
        this.date = new Date();
        this.articleVariantId = {};
        this.articleVariant = new ArticleVariant();
        this.before = 0;
        this.quantity = 0;
        this.after = 0;
        this.remark = '';

        this.copy(source);
    }
}