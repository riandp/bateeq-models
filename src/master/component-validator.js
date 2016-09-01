require("should");
var validateItem = require('./item-validator');

var validateComponent = function(data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);

    data.should.have.property('level');
    data.level.should.instanceof(String);

    data.should.have.property('itemId');
    data.itemId.should.instanceof(Object);

    data.should.have.property('item');
    data.item.should.instanceof(Object);
    validateItem(data.item);
    
    for (var component of data.item.components) {
        validateComponent(component);
    }

    data.should.have.property('quantity');
    data.quantity.should.instanceof(Number);

    data.should.have.property('uom');
    data.uom.should.instanceof(String);

    data.should.have.property('remark');
    data.remark.should.instanceof(String);

};

module.exports = validateComponent;