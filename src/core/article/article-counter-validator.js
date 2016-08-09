require("should");

var validateArticleSubCounter = require("./article-sub-counter-validator");

module.exports = function(data) {
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

    for (var sub of data.subCounters) {
        validateArticleSubCounter(sub);
    }
};