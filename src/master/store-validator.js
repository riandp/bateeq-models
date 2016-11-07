require("should");
var validateShift = require("./store-shift-validator");

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);

    data.should.have.property('code');
    data.code.should.instanceof(String);
    
    data.should.have.property('name');
    data.name.should.instanceof(String); 
    
    data.should.have.property('description');
    data.description.should.instanceof(String); 
    
    data.should.have.property('salesTarget');
    data.salesTarget.should.be.Number();
    
    data.should.have.property('storageId');
    data.storageId.should.instanceof(Object);
    
    data.should.have.property('storage');
    data.storage.should.instanceof(Object);

    data.should.have.property('salesCategoryId');
    data.salesCategoryId.should.instanceof(Object);
    
    data.should.have.property('salesCategory');
    data.salesCategory.should.instanceof(Object);
    
    data.should.have.property('shifts');
    data.shifts.should.instanceof(Array);
    
    for (var shift of data.shifts) {
        validateShift(shift);
    }
};