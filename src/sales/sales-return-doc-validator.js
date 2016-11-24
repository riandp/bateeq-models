require("should");
var validateSales = require("./sales-doc-validator");
var validateSalesReturnItem = require("./sales-return-item-validator");

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);

    data.should.have.property('code');
    data.code.should.instanceof(String);

    data.should.have.property('date');
    data.date.should.instanceof(Date);
    
    data.should.have.property('salesDocId');
    data.salesDocId.should.instanceof(Object); 
    
    data.should.have.property('salesDoc');
    data.salesDoc.should.instanceof(Object); 
    
    data.should.have.property('salesDocReturnId');
    data.salesDocReturnId.should.instanceof(Object); 
    
    data.should.have.property('salesDocReturn');
    data.salesDocReturn.should.instanceof(Object); 
 
    data.should.have.property('storeId');
    data.storeId.should.instanceof(Object); 
    
    data.should.have.property('store');
    data.store.should.instanceof(Object); 
 
    data.should.have.property('returnItems');
    data.returnItems.should.instanceof(Array);
    
    validateSales(data.salesDoc);
    
    validateSales(data.salesDocReturn);
  
    for (var returnItem of data.returnItems) {
        validateSalesReturnItem(returnItem);
    }
};