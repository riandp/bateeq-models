var BaseModel = require('capital-models').Base;
class Discount extends BaseModel {
    constructor(source) {
        super('discount', '1.0.0');

        // Define properties.
        this.storeId = '';
        this.store = {};
        this.code = '';
        this.startUtcDate = new Date();
        this.endUtcDate = new Date();
        this.remark = '';
        

        this.copy(source);
    }
}