require("should");

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);
     
    data.should.have.property('type');
    data.type.should.instanceof(String); 

    data.should.have.property('criterions');
    data.criterions.should.instanceof(Array); 
        
};