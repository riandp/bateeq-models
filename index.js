module.exports = {
    article: {
        ArticleApproval: require('./src/article/article-approval'),
        ArticleCategory: require('./src/article/article-category'),
        ArticleColor: require('./src/article/article-color'),
        ArticleCostCalculationDetail: require('./src/article/article-cost-calculation-detail'),
        ArticleCostCalculation: require('./src/article/article-cost-calculation'),
        ArticleMotif: require('./src/article/article-motif'),
        ArticleOrigin: require('./src/article/article-origin'),
        ArticleSeason: require('./src/article/article-season'),
        ArticleSize: require('./src/article/article-size'),
        ArticleStyle: require('./src/article/article-style'),
        ArticleSubCategory: require('./src/article/article-sub-category'),
        ArticleType: require('./src/article/article-type'),
        ArticleVariant: require('./src/article/article-variant'),
        Article: require('./src/article/article'),
    },
    inventory: {
        InventoryMovement: require('./src/inventory/inventory-movement'),
        Inventory: require('./src/inventory/inventory'),
        StockIn: require('./src/inventory/stock-in'),
        StockItem: require('./src/inventory/stock-item'),
        StockOut: require('./src/inventory/stock-out'),
        Storage: require('./src/inventory/storage')
    },
    manufacture: {
        FinishingItem: require('./src/manufacture/finishing-item'),
        Finishing: require('./src/manufacture/finishing')
    },
    master: {
        MaterialCategory: require('./src/master/material-category'),
        Material: require('./src/master/material')
    },
    map: require("./src/map"),
    validator: require("./test/validator")
}
