require("should");

var validateSalesItemReturn = require("./sales-item-validator");

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);
  
    data.should.have.property('itemId');
    data.itemId.should.instanceof(Object);

    data.should.have.property('item');
    data.item.should.instanceof(Object);

    data.should.have.property('promoId');
    data.promoId.should.instanceof(Object);

    data.should.have.property('promo');
    data.promo.should.instanceof(Object);
    
    data.should.have.property('size');
    data.size.should.instanceof(String); 
    
    data.should.have.property('quantity');
    data.quantity.should.be.Number();

    data.should.have.property('price');
    data.price.should.be.Number();
    
    data.should.have.property('discount1');
    data.discount1.should.be.Number();
    
    data.should.have.property('discount2');
    data.discount2.should.be.Number();
    
    data.should.have.property('discountNominal');
    data.discountNominal.should.be.Number();
    
    data.should.have.property('margin');
    data.margin.should.be.Number();
    
    data.should.have.property('specialDiscount');
    data.specialDiscount.should.be.Number();
    
    data.should.have.property('total');
    data.total.should.be.Number(); 
    
    data.should.have.property('isReturn');
    data.isReturn.should.be.Boolean(); 
     
    data.should.have.property('returnItems');
    data.returnItems.should.instanceof(Array);
    
    for (var returnItem of data.returnItems) {
        validateSalesItemReturn(returnItem);
    }
};