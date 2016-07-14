module.exports = {
    article: {
        ArticleApproval: require('./src/article/article-approval'),
        ArticleBrand: require('./src/article/article-brand'),
        ArticleCategory: require('./src/article/article-category'),
        ArticleColor: require('./src/article/article-color'),
        ArticleCostCalculationDetail: require('./src/article/article-cost-calculation-detail'),
        ArticleCostCalculation: require('./src/article/article-cost-calculation'),
        ArticleCounter: require('./src/article/article-counter'),
        ArticleMaterial: require('./src/article/article-material'),
        ArticleMotif: require('./src/article/article-motif'),
        ArticleOrigin: require('./src/article/article-origin'),
        ArticleSeason: require('./src/article/article-season'),
        ArticleSize: require('./src/article/article-size'),
        ArticleSubCounter: require('./src/article/article-sub-counter'),
        ArticleTheme: require('./src/article/article-theme'),
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
        Storage: require('./src/inventory/storage'),
        TransferInDoc: require('./src/inventory/transfer-in-doc'),
        TransferInItem: require('./src/inventory/transfer-in-item'),
        TransferOutDoc: require('./src/inventory/transfer-out-doc'),
        TransferOutItem: require('./src/inventory/transfer-out-item')
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
