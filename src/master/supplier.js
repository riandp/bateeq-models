var BaseModel = require('capital-models').Base;
class Supplier extends BaseModel {
    constructor(source) {
        super('supplier', '1.0.0');

        // Define properties.
        this.code = '';
        this.name = '';
        this.address = '';
        this.cityId = '';
        this.contactName = '';
        this.phoneNo = '';
        this.faxNo = '';

        this.copy(source);
    }
}