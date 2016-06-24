var MongoModel = require('capital-models').MongoModel;

module.exports = class MaterialCategory extends MongoModel {
    constructor(source) {
        super('material-category', '1.0.0');

        // Define properties.
        this.code = '';
        this.name = '';
        this.description = '';

        this.copy(source);
    }
}