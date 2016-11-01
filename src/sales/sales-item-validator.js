require("should");

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);
  
    data.should.have.property('articleVariantId');
    data.articleVariantId.should.instanceof(Object);

    data.should.have.property('articleVariant');
    data.articleVariant.should.instanceof(Object);

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
};