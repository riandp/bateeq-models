require("should");
 
module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);
    
    data.should.have.property('quantity1');
    data.quantity1.should.be.Number();
    
    data.should.have.property('quantity2');
    data.quantity2.should.be.Number();
    
    data.should.have.property('quantity3');
    data.quantity3.should.be.Number();
    
    data.should.have.property('quantity4');
    data.quantity4.should.be.Number();
    
    data.should.have.property('quantity5');
    data.quantity5.should.be.Number();
    
};