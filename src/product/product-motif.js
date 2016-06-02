var BaseModel = require('capital-models').Base;
class ProductMotif extends BaseModel {
    constructor(source) {
        super('product-motif', '1.0.0');

        // Define properties.
        this.code = '';
        this.name = '';

        this.copy(source);
    }
}