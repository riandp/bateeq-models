require("should");

var validateArticleType = require("./article-type-validator");
var validateArticleBrand = require("./article-brand-validator");
var validateArticleOrigin = require("./article-origin-validator");
var validateArticleCategory = require("./article-category-validator");
var validateArticleCounter = require("./article-counter-validator");
var validateArticleSubCounter = require("./article-sub-counter-validator");
var validateArticleMaterial = require("./article-material-validator");
var validateArticleTheme = require("./article-theme-validator");
var validateArticleSeason = require("./article-season-validator");
var validateArticleMotif = require("./article-motif-validator");
var validateArticleColor = require("./article-color-validator");
var validateArticleVariant = require("./article-variant-validator");

module.exports = function(data) {
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