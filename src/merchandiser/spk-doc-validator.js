require("should");
var validateSPKItem = require("./spk-item-validator");

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);

    data.should.have.property('code');
    data.code.should.instanceof(String);

    data.should.have.property('date');
    data.date.should.instanceof(Date);

    data.should.have.property('reference');
    data.reference.should.instanceof(String);
    
    data.should.have.property('expeditionDocumentId');
    data.expeditionDocumentId.should.instanceof(Object);

    data.should.have.property('sourceId');
    data.sourceId.should.instanceof(Object);
    data.should.have.property('source');
    data.source.should.instanceof(Object);

    data.should.have.property('destinationId');
    data.destinationId.should.instanceof(Object);
    data.should.have.property('destination');
    data.destination.should.instanceof(Object);

    data.should.have.property('items');
    data.items.should.instanceof(Array);

    for (var item of data.items) {
        validateSPKItem(item);
    }

    data.should.have.property('isDraft');
    data.isDraft.should.be.Boolean();

    data.should.have.property('isReceived');
    data.isDraft.should.be.Boolean();

    data.should.have.property('packingList');
    data.packingList.should.instanceof(String);

    data.should.have.property('packingList');
    data.password.should.be.Number();
};