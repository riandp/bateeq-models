require("should");

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceof(Object); 

    data.should.have.property('paymentType');
    data.paymentType.should.instanceof(String);

    data.should.have.property('voucherId');
    data.voucherId.should.instanceof(Object); 
    data.should.have.property('voucher');
    data.voucher.should.instanceof(Object);
     
    data.should.have.property('bankId');
    data.bankId.should.instanceof(Object); 
    data.should.have.property('bank');
    data.bank.should.instanceof(Object);
    
    data.should.have.property('bankCardId');
    data.bankCardId.should.instanceof(Object); 
    data.should.have.property('bankCard');
    data.bankCard.should.instanceof(Object);
     
    data.should.have.property('cardTypeId');
    data.cardTypeId.should.instanceof(Object);
    data.should.have.property('cardType');
    data.cardType.should.instanceof(Object);
    
    data.should.have.property('card');
    data.card.should.instanceof(String);
    
    data.should.have.property('cardNumber');
    data.cardNumber.should.instanceof(String);
    
    data.should.have.property('cardName');
    data.cardName.should.instanceof(String);
    
    data.should.have.property('cardAmount');
    data.cardAmount.should.be.Number();
    
    data.should.have.property('cashAmount');
    data.cashAmount.should.be.Number();
};