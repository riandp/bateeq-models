require("should");
var validateArticle = require('../master/article/article-validator');
var validateCostCalculationItem = require('./cost-calculation-item-validator');

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);

    data.should.have.property('articleId');
    data.articleId.should.instanceof(Object);

    data.should.have.property('article');
    data.article.should.instanceof(Object);
    validateArticle(data.article);

    data.should.have.property('items');
    data.items.should.be.Array();
    for (var item of data.items)
        validateCostCalculationItem(item); 

    data.should.have.property('remark');
    data.remark.should.be.String();
};