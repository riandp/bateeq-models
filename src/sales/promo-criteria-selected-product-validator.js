require("should");

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);
      
    data.should.have.property('itemId');
    data.itemId.should.instanceof(Object); 
    
    data.should.have.property('item');
    data.item.should.instanceof(Object); 
    
    data.should.have.property('minimumQuantity');
    data.minimumQuantity.should.be.Number();
    
};