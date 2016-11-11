require("should");

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
    
    data.should.have.property('address');
    data.description.should.instanceof(String); 
    
    data.should.have.property('phone');
    data.description.should.instanceof(String);
    
    data.should.have.property('salesCapital');
    data.salesTarget.should.be.Number(); 
};