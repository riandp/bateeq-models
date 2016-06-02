var BaseModel = require('capital-models').Base;
class Product extends BaseModel {
    constructor(source) {
        super('product', '1.0.0');

        // Define properties.
        this.productModelId = '';
        this.barcode = '';
        this.name = '';
        this.retailPrice = 0;
        this.cogs = 0;
        

        this.copy(source);
    }
}