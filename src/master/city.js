var BaseModel = require('capital-models').Base;
class City extends BaseModel {
    constructor(source) {
        super('city', '1.0.0');

        // Define properties.
        this.code = '';
        this.name = '';

        this.copy(source);
    }
}