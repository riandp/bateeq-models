var BaseModel = require('capital-models').Base;
class ProductCategory extends BaseModel {
    constructor(source) {
        super('product-category', '1.0.0');

        // Define properties.
        this.code = '';
        this.name = '';

        this.copy(source);
    }
}