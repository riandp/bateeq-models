require("should");

var validatePromoDiscount = require("./promo-discount-validator");

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);
      
    data.should.have.property('articleVariantId');
    data.articleVariantId.should.instanceof(Object); 
    
    data.should.have.property('articleVariant');
    data.articleVariant.should.instanceof(Object); 
    
    data.should.have.property('promoDiscount');
    data.promoDiscount.should.instanceof(Object);  
};