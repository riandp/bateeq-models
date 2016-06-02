var BaseModel = require('capital-models').Base;
class InvoiceItem extends BaseModel {
    constructor(source) {
        super('invoice-item', '1.0.0');

        // Define properties.
        this.storeId = '';
        this.store = {};
        this.code = '';
        this.barcode = '';
        this.quantity = 1;
        this.price = 0;
        this.discount1 = 0;
        this.discount2 = 0;
        this.subTotal = 0;
        this.remark = '';
        this.total = 0;

        this.copy(source);
    }
}