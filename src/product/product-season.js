var BaseModel = require('capital-models').Base;
class ProductSeason extends BaseModel {
    constructor(source) {
        super('product-season', '1.0.0');

        // Define properties.
        this.code = '';
        this.name = '';

        this.copy(source);
    }
}