var BaseModel = require('capital-models').Base;
class ProductModel extends BaseModel {
    constructor(source) {
        super('product-model', '1.0.0');

        // Define properties.
        this.supplierId = '';
        this.ro = '';
        this.code = '';
        this.name = '';
        this.originId = '';
        this.origin = '';
        this.categoryId = '';
        this.category = '';
        this.subCategoryId = '';
        this.subCategory = '';
        this.materialId = '';
        this.material = '';
        this.motifId = '';
        this.motif = '';
        this.seasonId = '';
        this.season = '';
        this.year = '';
        this.weight = 0;


        this.copy(source);
    }
}