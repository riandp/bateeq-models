require("should");
var validateFinishingItem = require("./finishing-item-validator");

module.exports = function(data) { 
    data.should.not.equal(null);
    data.should.instanceof(Object);

    // data.should.have.property('storageId');
    // data.storageId.should.instanceof(Object);

    data.should.have.property('code');
    data.code.should.be.String();

    data.should.have.property('date');
    data.date.should.be.Date();

    data.should.have.property('items');
    data.items.should.instanceof(Array);
    for (var item of data.items)
        validateFinishingItem(item);
};