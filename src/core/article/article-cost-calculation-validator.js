require("should");

var validateArticleCostCalculationDetail = require("./article-cost-calculation-detail-validator");

module.exports = function(data) {
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