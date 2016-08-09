require("should");
var validateTransferOut = require("./transfer-out-doc-validator");
var validateExpeditionSpk = require("./expedition-spk-validator");

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);

   data.should.have.property('code');
    data.code.should.instanceof(String);

    data.should.have.property('date');
    data.date.should.instanceof(Date);

    data.should.have.property('expedition');
    data.expedition.should.instanceof(String);
    
    data.should.have.property('weight');
    data.weight.should.instanceof(String); 
    
    data.should.have.property('transferOutDocuments');
    data.transferOutDocuments.should.instanceof(Array);

    data.should.have.property('spkDocuments');
    data.spkDocuments.should.instanceof(Array);

    for (var transferOutDocument of data.transferOutDocuments) {
        validateTransferOut(transferOutDocument);
    } 
    
    for (var spkDocument of data.spkDocuments) {
        validateExpeditionSpk(spkDocument);
    } 
};