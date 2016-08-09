require("should");

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);

    data.should.have.property('moduleId');
    data.moduleId.should.instanceof(Object);

    data.should.have.property('module');
    data.module.should.instanceof(Object);

    data.should.have.property('year');
    data.year.should.be.Number();

    data.should.have.property('month');
    data.month.should.be.Number();

    data.should.have.property('seed');
    data.seed.should.be.Number();
};