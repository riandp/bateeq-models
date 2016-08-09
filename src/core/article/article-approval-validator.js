require("should");

var validateArticle = require('./article-validator');

module.exports = function(data) {
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