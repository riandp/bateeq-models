require("should");
var validateTransferInItem = require("./transfer-in-item-validator");

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);

    data.should.have.property('code');
    data.code.should.instanceof(String);

    data.should.have.property('date');
    data.date.should.instanceof(Date);

    data.should.have.property('reference');
    data.reference.should.instanceof(String);

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
        validateTransferInItem(item);
    }

    data.should.have.property('remark');
    data.remark.should.instanceof(String);
};