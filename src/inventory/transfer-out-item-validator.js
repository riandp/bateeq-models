require("should");

module.exports = function(data) {
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