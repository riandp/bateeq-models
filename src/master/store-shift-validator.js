require("should");

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);

    data.should.have.property('shift');
    data.shift.should.be.Number();
    
    data.should.have.property('dateFrom');
    data.dateFrom.should.instanceof(Date); 
    
    data.should.have.property('dateTo');
    data.dateTo.should.instanceof(Date); 
};