require("should");
var validateCostCalculationArticle = require('./cost-calculation-article-validator');

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);

    data.should.have.property('code');
    data.code.should.instanceof(String);

    data.should.have.property('date');
    data.date.should.instanceof(Date);

    data.should.have.property('items');
    data.items.should.be.Array();
    for (var item of data.items)
        validateCostCalculationArticle(item);

    data.should.have.property('remark');
    data.remark.should.be.String();
};