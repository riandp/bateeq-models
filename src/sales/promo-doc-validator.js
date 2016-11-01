require("should");

var validateStore = require("../master/store-validator");
var validatePromoProduct = require("./promo-product-validator");

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);
     
    data.should.have.property('code');
    data.code.should.instanceof(String); 
    
    data.should.have.property('name');
    data.name.should.instanceof(String); 
    
    data.should.have.property('description');
    data.description.should.instanceof(String);  
    
    data.should.have.property('validDateFrom');
    data.validDateFrom.should.instanceof(Date); 
    
    data.should.have.property('validDateTo');
    data.validDateTo.should.instanceof(Date); 
    
    data.should.have.property('stores');
    data.stores.should.instanceof(Array); 
        
    for (var store of data.stores) {
        validateStore(store);
    }
    
    data.should.have.property('promoProducts');
    data.promoProducts.should.instanceof(Array); 
        
    for (var promoProduct of data.promoProducts) {
        validatePromoProduct(promoProduct);
    }
};