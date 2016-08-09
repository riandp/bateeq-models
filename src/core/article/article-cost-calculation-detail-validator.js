require("should");

var validateArticle = require('./article-validator');

module.exports = function(data) {
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