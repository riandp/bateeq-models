module.exports = {
    master: {
        Area: require('./src/master/area'),
        City: require('./src/master/city'),
        Store: require('./src/master/store'),
        Supplier: require('./src/master/supplier')
    },
    product: {
        ProductCategory: require('./src/product/product-category'),
        ProductMaterial: require('./src/product/product-material'),
        ProductMotif: require('./src/product/product-category'),
        ProductOrigin: require('./src/product/product-origin'),
        ProductSeason: require('./src/product/product-season'),
        ProductSize: require('./src/product/product-size'),
        ProductSubCategory: require('./src/product/product-sub-category'),
        ProductModel: require('./src/product/product-model'),
        Product: require('./src/product/product'),
    },
    promotional:{
        Discount: require('./src/promotional/discount'),
        DiscountItem: require('./src/promotional/discount-item'),
        Voucher: require('./src/promotional/voucher'),
    },
    sales:{
        Invoice: require('./src/sales/invoice'),
        InvoiceItem: require('./src/sales/invoice-item'),
    }
}
