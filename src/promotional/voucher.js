var BaseModel = require('capital-models').Base;
class Voucher extends BaseModel {
    constructor(source) {
        super('voucher', '1.0.0');

        // Define properties. 
        this.code = '';
        this.nominal = 0;
        this.startUtcDate = new Date();
        this.endUtcDate = new Date();
        this.invoiceId = '';
        this.issued = false;
        this.remark = '';
        

        this.copy(source);
    }
}