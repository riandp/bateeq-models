require("should");
var validateStorage = require("./storage-validator");
var validateArticleVariant = require('../master/item-validator');

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);

    data.should.have.property('inventoryId');
    data.inventoryId.should.instanceof(Object);

    data.should.have.property('date');
    data.date.should.be.Date();

    data.should.have.property('reference');
    data.reference.should.instanceof(String);

    data.should.have.property('type');
    data.type.should.instanceof(String);

    data.should.have.property('storageId');
    data.storageId.should.instanceof(Object);

    data.should.have.property('storage');
    data.storage.should.instanceof(Object);
    validateStorage(data.storage);

    data.should.have.property('itemId');
    data.itemId.should.instanceof(Object);

    data.should.have.property('item');
    data.item.should.instanceof(Object);
    validateArticleVariant(data.item);

    data.should.have.property('before');
    data.before.should.be.Number();

    data.should.have.property('quantity');
    data.quantity.should.be.Number();

    data.should.have.property('after');
    data.after.should.be.Number();

    data.should.have.property('remark');
    data.remark.should.instanceof(String);
};