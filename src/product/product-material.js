var BaseModel = require('capital-models').Base;
class ProductMaterial extends BaseModel {
    constructor(source) {
        super('product-material', '1.0.0');

        // Define properties.
        this.code = '';
        this.name = '';

        this.copy(source);
    }
}