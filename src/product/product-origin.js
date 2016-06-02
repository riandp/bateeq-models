var BaseModel = require('capital-models').Base;
class ProductOrigin extends BaseModel {
    constructor(source) {
        super('product-origin', '1.0.0');

        // Define properties.
        this.code = '';
        this.name = '';

        this.copy(source);
    }
}