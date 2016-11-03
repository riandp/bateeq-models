require("should");

var validatePromoDiscount = require("./promo-discount-validator");

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);
      
    data.should.have.property('itemId');
    data.itemId.should.instanceof(Object); 
    
    data.should.have.property('item');
    data.item.should.instanceof(Object); 
    
    data.should.have.property('promoDiscount');
    data.promoDiscount.should.instanceof(Object);  
};