require("should");
var validateArticleVariant = require('../core/article/article-variant-validator');

module.exports = function(data) { 
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