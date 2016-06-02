var BaseModel = require('capital-models').Base;
class DiscountItem extends BaseModel {
    constructor(source) {
        super('discount-item', '1.0.0');

        // Define properties.
        this.discountId = '';
        this.barcode = '';
        this.discount1 = 0;
        this.discount2 = 0;
        this.remark = '';


        this.copy(source);
    }
}