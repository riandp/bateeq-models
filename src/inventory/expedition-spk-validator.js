require("should");

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);

    data.should.have.property('spkDocumentId');
    data.spkDocumentId.should.instanceof(Object);

    data.should.have.property('spkDocument');
    data.spkDocument.should.instanceof(Object);

    data.should.have.property('quantity');
    data.quantity.should.be.Number();

    data.should.have.property('remark');
    data.remark.should.instanceof(String); 
};