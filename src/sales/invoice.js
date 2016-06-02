var BaseModel = require('capital-models').Base;
class Invoice extends BaseModel {
    constructor(source) {
        super('invoice', '1.0.0');

        // Define properties.
        this.storeId = '';
        this.store = {};
        this.code = '';
        this.refCode = '';
        this.trxUtcDate = new Date();
        this.remark = '';
        this.paymentMethod = '';
        
        this.cardNo = '';
        this.cardType = '';
        this.cardName = '';

        this.debit = 0;
        this.credit = 0;
        this.cash = 0;
        this.voucher = 0;

        this.payment = 0;
        this.change = 0;

        this.vouchers = [];

        this.total = 0;
        
        this.userId = '';
        this.void = false;
        
        this.copy(source);
    }
}