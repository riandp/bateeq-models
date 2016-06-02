var BaseModel = require('capital-models').Base;
class Area extends BaseModel {
    constructor(source) {
        super('area', '1.0.0');

        // Define properties.
        this.code = '';
        this.name = '';

        this.copy(source);
    }
}