var BaseModel = require('capital-models').Base;
class Store extends BaseModel {
    constructor(source) {
        super('store', '1.0.0');

        // Define properties.
        this.code = '';
        this.name = '';
        this.address = '';
        this.cityId = '';
        this.contactName = '';
        this.phoneNo = '';
        this.faxNo = '';

        this.openUtcDate = new Date();
        this.areaId = '';

        this.copy(source);
    }
}