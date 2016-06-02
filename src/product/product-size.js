var BaseModel = require('capital-models').Base;
class ProductSize extends BaseModel {
    constructor(source) {
        super('product-size', '1.0.0');

        // Define properties.
        this.code = '';
        this.name = '';

        this.copy(source);
    }
}