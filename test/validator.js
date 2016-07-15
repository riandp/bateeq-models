if (process.env.NODE_ENV == 'production') {
    exports = {};
}
else {

    var should = require('should');

    var validateArticleApproval = function(data) {
        data.should.not.equal(null);
        data.should.instanceof(Object);

        data.should.have.property('code');
        data.code.should.instanceof(String);

        data.should.have.property('version');
        data.version.should.instanceof(String);

        data.should.have.property('date');
        data.date.should.be.Date();

        data.should.have.property('articleId');
        data.articleId.should.instanceof(Object);

        data.should.have.property('article');
        data.article.should.instanceof(Object);
        validateArticle(data.article);

        data.should.have.property('remark');
        data.remark.should.instanceof(String);

        data.should.have.property('approved');
        data.approved.should.be.Boolean();

        data.should.have.property('rejected');
        data.rejected.should.be.Boolean();

        data.should.have.property('locked');
        data.locked.should.be.Boolean();
    };

    var validateArticleBrand = function(data) {
        data.should.not.equal(null);
        data.should.instanceof(Object);

        data.should.have.property('code');
        data.code.should.instanceof(String);

        data.should.have.property('name');
        data.name.should.instanceof(String);

        data.should.have.property('description');
        data.description.should.instanceof(String);
    };

    var validateArticleCategory = function(data) {
        data.should.not.equal(null);
        data.should.instanceof(Object);

        data.should.have.property('code');
        data.code.should.instanceof(String);

        data.should.have.property('name');
        data.name.should.instanceof(String);

        data.should.have.property('description');
        data.description.should.instanceof(String);
    };

    var validateArticleColor = function(data) {
        data.should.not.equal(null);
        data.should.instanceof(Object);

        data.should.have.property('code');
        data.code.should.instanceof(String);

        data.should.have.property('name');
        data.name.should.instanceof(String);

        data.should.have.property('description');
        data.description.should.instanceof(String);
    };

    var validateArticleCostCalculationDetail = function(data) {
        data.should.not.equal(null);
        data.should.instanceof(Object);

        data.should.have.property('articleId');
        data.articleId.should.instanceof(Object);

        data.should.have.property('article');
        data.article.should.instanceof(Object);
        validateArticle(data.article);

        data.should.have.property('remark');
        data.remark.should.instanceof(String);

        data.should.have.property('quantity');
        data.quantity.should.be.Number();

        data.should.have.property('price');
        data.price.should.be.Number();

        data.should.have.property('total');
        data.total.should.be.Number();

        data.should.have.property('conversionUnit');
        data.conversionUnit.should.instanceof(String);

        data.should.have.property('conversionRate');
        data.conversionRate.should.be.Number();
    };

    var validateArticleCostCalculation = function(data) {
        data.should.not.equal(null);
        data.should.instanceof(Object);

        data.should.have.property('code');
        data.code.should.instanceof(String);

        data.should.have.property('name');
        data.name.should.instanceof(String);

        data.should.have.property('description');
        data.description.should.instanceof(String);

        data.should.have.property('details');
        data.details.should.instanceof(Array);
        for (var detail of data.details)
            validateArticleCostCalculationDetail(detail);
    };

    var validateArticleCounter = function(data) {
        data.should.not.equal(null);
        data.should.instanceof(Object);

        data.should.have.property('code');
        data.code.should.instanceof(String);

        data.should.have.property('name');
        data.name.should.instanceof(String);

        data.should.have.property('description');
        data.description.should.instanceof(String);
        
        data.should.have.property('subCounters');
        data.subCounters.should.instanceof(Array);
        
        for(var sub of data.subCounters)
        {
            validateArticleSubCounter(sub);
        }
    };


    var validateArticleMaterial = function(data) {
        data.should.not.equal(null);
        data.should.instanceof(Object);

        data.should.have.property('code');
        data.code.should.instanceof(String);

        data.should.have.property('name');
        data.name.should.instanceof(String);

        data.should.have.property('description');
        data.description.should.instanceof(String);
    };


    var validateArticleMotif = function(data) {
        data.should.not.equal(null);
        data.should.instanceof(Object);

        data.should.have.property('code');
        data.code.should.instanceof(String);

        data.should.have.property('name');
        data.name.should.instanceof(String);

        data.should.have.property('description');
        data.description.should.instanceof(String);
    };

    var validateArticleOrigin = function(data) {
        data.should.not.equal(null);
        data.should.instanceof(Object);

        data.should.have.property('code');
        data.code.should.instanceof(String);

        data.should.have.property('name');
        data.name.should.instanceof(String);

        data.should.have.property('description');
        data.description.should.instanceof(String);
    };

    var validateArticleSeason = function(data) {
        data.should.not.equal(null);
        data.should.instanceof(Object);

        data.should.have.property('code');
        data.code.should.instanceof(String);

        data.should.have.property('name');
        data.name.should.instanceof(String);

        data.should.have.property('description');
        data.description.should.instanceof(String);
    };

    var validateArticleSize = function(data) {
        data.should.not.equal(null);
        data.should.instanceof(Object);

        data.should.have.property('code');
        data.code.should.instanceof(String);

        data.should.have.property('name');
        data.name.should.instanceof(String);

        data.should.have.property('description');
        data.description.should.instanceof(String);
    };

    var validateArticleSubCounter = function(data) {
        data.should.not.equal(null);
        data.should.instanceof(Object);

        data.should.have.property('code');
        data.code.should.instanceof(String);

        data.should.have.property('name');
        data.name.should.instanceof(String);

        data.should.have.property('description');
        data.description.should.instanceof(String);
    };

    var validateArticleTheme = function(data) {
        data.should.not.equal(null);
        data.should.instanceof(Object);

        data.should.have.property('code');
        data.code.should.instanceof(String);

        data.should.have.property('name');
        data.name.should.instanceof(String);

        data.should.have.property('description');
        data.description.should.instanceof(String);
    };

    var validateArticleType = function(data) {
        data.should.not.equal(null);
        data.should.instanceof(Object);

        data.should.have.property('code');
        data.code.should.instanceof(String);

        data.should.have.property('name');
        data.name.should.instanceof(String);

        data.should.have.property('description');
        data.description.should.instanceof(String);
    };

    var validateArticleVariant = function(data) {
        data.should.not.equal(null);
        data.should.instanceof(Object);

        data.should.have.property('articleId');
        data.articleId.should.instanceof(Object);

        data.should.have.property('code');
        data.code.should.instanceof(String);

        data.should.have.property('name');
        data.name.should.instanceof(String);

        data.should.have.property('description');
        data.description.should.instanceof(String);

        data.should.have.property('size');
        data.size.should.instanceof(String);

        // data.should.have.property('color');
        // data.color.should.instanceof(String);

        data.should.have.property('pictures');
        data.pictures.should.instanceof(Array);
    };

    var validateArticle = function(data) {
        data.should.not.equal(null);
        data.should.instanceof(Object);

        data.should.have.property('code');
        data.code.should.instanceof(String);

        data.should.have.property('name');
        data.name.should.instanceof(String);
        
        data.should.have.property('description');
        data.description.should.instanceof(String);

        data.should.have.property('version');
        data.version.should.instanceof(String);

        data.should.have.property('typeId');
        data.typeId.should.instanceof(Object);

        data.should.have.property('type');
        data.type.should.instanceof(Object);
        validateArticleType(data.type);

        data.should.have.property('brandId');
        data.brandId.should.instanceof(Object);

        data.should.have.property('brand');
        data.brand.should.instanceof(Object);
        validateArticleBrand(data.brand);

        data.should.have.property('originId');
        data.originId.should.instanceof(Object);

        data.should.have.property('origin');
        data.origin.should.instanceof(Object);
        validateArticleOrigin(data.origin);

        data.should.have.property('categoryId');
        data.categoryId.should.instanceof(Object);

        data.should.have.property('category');
        data.category.should.instanceof(Object);
        validateArticleCategory(data.category);
        
        
        data.should.have.property('counterId');
        data.counterId.should.instanceof(Object);

        data.should.have.property('counter');
        data.counter.should.instanceof(Object);
        validateArticleCounter(data.counter);

        data.should.have.property('subCounterId');
        data.subCounterId.should.instanceof(Object);

        data.should.have.property('subCounter');
        data.subCounter.should.instanceof(Object);
        validateArticleSubCounter(data.subCounter);
        
        data.should.have.property('materialId');
        data.materialId.should.instanceof(Object);

        data.should.have.property('material');
        data.material.should.instanceof(Object);
        validateArticleMaterial(data.material);

        data.should.have.property('themeId');
        data.themeId.should.instanceof(Object);

        data.should.have.property('theme');
        data.theme.should.instanceof(Object);
        validateArticleTheme(data.theme);

        data.should.have.property('seasonId');
        data.seasonId.should.instanceof(Object);

        data.should.have.property('season');
        data.season.should.instanceof(Object);
        validateArticleSeason(data.season);

        data.should.have.property('motifId');
        data.motifId.should.instanceof(Object);

        data.should.have.property('motif');
        data.motif.should.instanceof(Object);
        validateArticleMotif(data.motif);

        data.should.have.property('colorId');
        data.colorId.should.instanceof(Object);

        data.should.have.property('color');
        data.color.should.instanceof(Object);
        validateArticleColor(data.color);

        data.should.have.property('launch');
        data.launch.should.be.Date();

        data.should.have.property('weight');
        data.weight.should.be.Number();

        data.should.have.property('status');
        data.status.should.instanceof(String);

        data.should.have.property('approved');
        data.approved.should.be.Boolean();

        data.should.have.property('rejected');
        data.rejected.should.be.Boolean();

        data.should.have.property('locked');
        data.locked.should.be.Boolean();

        data.should.have.property('variants');
        data.variants.should.instanceof(Array);
        for (var variant of data.variants)
            validateArticleVariant(variant);
    };


    exports.article = {
        articleApproval: validateArticleApproval,
        articleBrand: validateArticleBrand,
        articleCategory: validateArticleCategory,
        articleColor: validateArticleColor,
        articleCostCalculationDetail: validateArticleCostCalculationDetail,
        articleCostCalculation: validateArticleCostCalculation,
        articleCounter: validateArticleCounter,
        articleMaterial: validateArticleMaterial,
        articleMotif: validateArticleMotif,
        articleOrigin: validateArticleOrigin,
        articleSeason: validateArticleSeason,
        articleSize: validateArticleSize,
        articleSubCounter: validateArticleSubCounter,
        articleTheme: validateArticleTheme,
        articleType: validateArticleType,
        articleVariant: validateArticleVariant,
        article: validateArticle
    }


    var validateInventoryMovement = function(data) {
        data.should.not.equal(null);
        data.should.instanceof(Object);
        
        data.should.have.property('inventoryId');
        data.inventoryId.should.instanceof(Object);


        data.should.have.property('date');
        data.date.should.be.Date();

        data.should.have.property('storageId');
        data.storageId.should.instanceof(Object);

        data.should.have.property('storage');
        data.storage.should.instanceof(Object);
        validateStorage(data.storage);

        data.should.have.property('articleVariantId');
        data.articleVariantId.should.instanceof(Object);

        data.should.have.property('articleVariant');
        data.articleVariant.should.instanceof(Object);
        validateArticleVariant(data.articleVariant);

        data.should.have.property('before');
        data.before.should.be.Number();
        
        data.should.have.property('quantity');
        data.quantity.should.be.Number();
        
        data.should.have.property('after');
        data.after.should.be.Number();
        
        data.should.have.property('remark');
        data.remark.should.instanceof(String);
    };

    var validateInventory = function(data) {
        data.should.not.equal(null);
        data.should.instanceof(Object); 

        data.should.have.property('storageId');
        data.storageId.should.instanceof(Object);

        data.should.have.property('storage');
        data.storage.should.instanceof(Object);
        validateStorage(data.storage);

        data.should.have.property('articleVariantId');
        data.articleVariantId.should.instanceof(Object);

        data.should.have.property('articleVariant');
        data.articleVariant.should.instanceof(Object);
        validateArticleVariant(data.articleVariant);

        data.should.have.property('quantity');
        data.quantity.should.be.Number();
    };

    var validateStockIn = function(data) {
        data.should.not.equal(null);
        data.should.instanceof(Object);

        data.should.have.property('code');
        data.code.should.instanceof(String);

        data.should.have.property('reference');
        data.reference.should.instanceof(String);

        data.should.have.property('storageId');
        data.storageId.should.instanceof(Object);

        data.should.have.property('date');
        data.date.should.be.Date();

        data.should.have.property('details');
        data.details.should.be.Array();
        for (var item of data.details)
            validateStockItem(item);
    };

    var validateStockItem = function(data) {
        data.should.not.equal(null);
        data.should.instanceof(Object);

        data.should.have.property('articleVariantId');
        data.articleVariantId.should.instanceof(Object);

        data.should.have.property('articleVariant');
        data.articleVariant.should.instanceof(Object);
        validateArticleVariant(data.articleVariant);

        data.should.have.property('quantity');
        data.quantity.should.be.Number();
    };

    var validateStockOut = function(data) {
        data.should.not.equal(null);
        data.should.instanceof(Object);

        data.should.have.property('code');
        data.code.should.instanceof(String);

        data.should.have.property('reference');
        data.reference.should.instanceof(String);

        data.should.have.property('storageId');
        data.storageId.should.instanceof(Object);

        data.should.have.property('date');
        data.date.should.be.Date();

        data.should.have.property('details');
        data.details.should.be.Array();
        for (var item of data.details)
            validateStockItem(item);
    };

    var validateStorage = function(data) {
        data.should.not.equal(null);
        data.should.instanceof(Object);

        data.should.have.property('code');
        data.code.should.instanceof(String);

        data.should.have.property('name');
        data.name.should.instanceof(String);

        data.should.have.property('description');
        data.description.should.instanceof(String);

        data.should.have.property('address');
        data.address.should.instanceof(String);

        data.should.have.property('phone');
        data.phone.should.instanceof(String);
    };

    var validateTransferInDoc = function(data) {
        data.should.not.equal(null);
        data.should.instanceof(Object);

        data.should.have.property('code');
        data.code.should.instanceof(String);

        data.should.have.property('date');
        data.date.should.instanceof(Date);

        data.should.have.property('reference');
        data.reference.should.instanceof(String);
        
        data.should.have.property('sourceId');
        data.sourceId.should.instanceof(Object);
        data.should.have.property('source');
        data.source.should.instanceof(Object);

        data.should.have.property('destinationId');
        data.destinationId.should.instanceof(Object);
        data.should.have.property('destination');
        data.destination.should.instanceof(Object);
        
        data.should.have.property('items');
        data.items.should.instanceof(Array);
        
        for(var item of data.items)
        {
            validateTransferInItem(item);
        }

        data.should.have.property('remark');
        data.remark.should.instanceof(String);
    };
    
    var validateTransferInItem = function(data)
    {
        data.should.not.equal(null);
        data.should.instanceof(Object);

        data.should.have.property('articleVariantId');
        data.articleVariantId.should.instanceof(Object);
        
        data.should.have.property('articleVariant');
        data.articleVariant.should.instanceof(Object);

        data.should.have.property('quantity');
        data.quantity.should.be.Number();

        data.should.have.property('remark');
        data.remark.should.instanceof(String);
          
        data.should.have.property('remark');
        data.remark.should.instanceof(String);
    };

    var validateTransferOutDoc = function(data) {
        data.should.not.equal(null);
        data.should.instanceof(Object);

        data.should.have.property('code');
        data.code.should.instanceof(String);

        data.should.have.property('date');
        data.date.should.instanceof(Date);

        data.should.have.property('reference');
        data.reference.should.instanceof(String);
        
        data.should.have.property('sourceId');
        data.sourceId.should.instanceof(Object);
        data.should.have.property('source');
        data.source.should.instanceof(Object);

        data.should.have.property('destinationId');
        data.destinationId.should.instanceof(Object);
        data.should.have.property('destination');
        data.destination.should.instanceof(Object);
        
        data.should.have.property('items');
        data.items.should.instanceof(Array);
        
        for(var item of data.items)
        {
            validateTransferOutItem(item);
        }

        data.should.have.property('remark');
        data.remark.should.instanceof(String);
    };
    
    var validateTransferOutItem = function(data)
    {
        data.should.not.equal(null);
        data.should.instanceof(Object);

        data.should.have.property('articleVariantId');
        data.articleVariantId.should.instanceof(Object);
        
        data.should.have.property('articleVariant');
        data.articleVariant.should.instanceof(Object);

        data.should.have.property('quantity');
        data.quantity.should.be.Number();

        data.should.have.property('remark');
        data.remark.should.instanceof(String);
          
        data.should.have.property('remark');
        data.remark.should.instanceof(String);
    };


    exports.inventory = {
        inventoryMovement: validateInventoryMovement,
        inventory: validateInventory,
        stockIn: validateStockIn,
        stockItem: validateStockItem,
        stockOut: validateStockOut,
        storage: validateStorage,
        transferInDoc: validateTransferInDoc,
        transferOutDoc: validateTransferOutDoc
    }


    var validateFinishingItem = function(data) {
        data.should.not.equal(null);
        data.should.instanceof(Object);

        // data.should.have.property('storageId');
        // data.storageId.should.instanceof(Object);

        data.should.have.property('articleVariantId');
        data.articleVariantId.should.instanceof(Object);

        data.should.have.property('articleVariant');
        data.articleVariant.should.instanceof(Object);
        validateArticleVariant(data.articleVariant);

        data.should.have.property('quantity');
        data.quantity.should.be.Number();
    };

    var validateFinishing = function(data) {
        data.should.not.equal(null);
        data.should.instanceof(Object);

        // data.should.have.property('storageId');
        // data.storageId.should.instanceof(Object);

        data.should.have.property('code');
        data.code.should.be.String();

        data.should.have.property('date');
        data.date.should.be.Date();

        data.should.have.property('items');
        data.items.should.instanceof(Array);
        for (var item of data.items)
            validateFinishingItem(item);
    };

    exports.manufacture = {
        finishingItem: validateFinishingItem,
        finishing: validateFinishing
    }
}