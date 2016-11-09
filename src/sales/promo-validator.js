require("should");

var validateStore = require("../master/store-validator");
var validateCriteria = require("./promo-criteria-validator");
var validateReward = require("./promo-reward-validator");

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);
     
    data.should.have.property('code');
    data.code.should.instanceof(String); 
    
    data.should.have.property('name');
    data.name.should.instanceof(String); 
    
    data.should.have.property('description');
    data.description.should.instanceof(String);  
    
    data.should.have.property('validFrom');
    data.validFrom.should.instanceof(Date); 
    
    data.should.have.property('validTo');
    data.validTo.should.instanceof(Date); 
    
    data.should.have.property('criteria');
    data.criteria.should.instanceof(Object); 
    
    data.should.have.property('reward');
    data.reward.should.instanceof(Object); 
    
    data.should.have.property('stores');
    data.stores.should.instanceof(Array); 
    
    validateCriteria(data.criteria);
    validateReward(data.reward);
    
    for (var store of data.stores) {
        validateStore(store);
    }
    
};