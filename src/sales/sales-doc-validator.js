require("should");
var validateSalesItem = require("./sales-item-validator");
var validateSalesDetail = require("./sales-detail-validator");

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);

    data.should.have.property('code');
    data.code.should.instanceof(String);

    data.should.have.property('date');
    data.date.should.instanceof(Date);
           
    data.should.have.property('totalProduct');
    data.totalProduct.should.be.Number();

    data.should.have.property('subTotal');
    data.subTotal.should.be.Number();
    
    data.should.have.property('discount');
    data.discount.should.be.Number();
    
    data.should.have.property('grandTotal');
    data.grandTotal.should.be.Number();
    
    data.should.have.property('reference');
    data.reference.should.instanceof(String); 
    
    data.should.have.property('shift');
    data.shift.should.be.Number();
 
    data.should.have.property('storeId');
    data.storeId.should.instanceof(Object); 
    
    data.should.have.property('store');
    data.store.should.instanceof(Object); 
 
    data.should.have.property('remark');
    data.remark.should.instanceof(String); 
    
    data.should.have.property('salesDetail');
    data.salesDetail.should.instanceof(Object); 
    
    data.should.have.property('items');
    data.items.should.instanceof(Array);
 
    //validateSalesDetail(data.salesDetail);
        
    for (var item of data.items) {
        validateSalesItem(item);
    }
};