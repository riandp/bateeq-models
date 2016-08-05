module.exports = {
    core: {
        Module: require('./src/core/module'),
        ModuleSeed: require('./src/core/module-seed'),

        article: {
            ArticleApproval: require('./src/core/article/article-approval'),
            ArticleBrand: require('./src/core/article/article-brand'),
            ArticleCategory: require('./src/core/article/article-category'),
            ArticleColor: require('./src/core/article/article-color'),
            ArticleCostCalculationDetail: require('./src/core/article/article-cost-calculation-detail'),
            ArticleCostCalculation: require('./src/core/article/article-cost-calculation'),
            ArticleCounter: require('./src/core/article/article-counter'),
            ArticleMaterial: require('./src/core/article/article-material'),
            ArticleMotif: require('./src/core/article/article-motif'),
            ArticleOrigin: require('./src/core/article/article-origin'),
            ArticleSeason: require('./src/core/article/article-season'),
            ArticleSize: require('./src/core/article/article-size'),
            ArticleSubCounter: require('./src/core/article/article-sub-counter'),
            ArticleTheme: require('./src/core/article/article-theme'),
            ArticleType: require('./src/core/article/article-type'),
            ArticleVariant: require('./src/core/article/article-variant'),
            Article: require('./src/core/article/article'),
        }
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
        TransferOutItem: require('./src/inventory/transfer-out-item'),
        FinishedGoodsDoc: require('./src/inventory/finished-goods-docs')
    },
    manufacture: {
        FinishingItem: require('./src/manufacture/finishing-item'),
        Finishing: require('./src/manufacture/finishing')
    },
    master: {
        MaterialCategory: require('./src/master/material-category'),
        Material: require('./src/master/material')
    },
    merchandiser: {
        SPK: require('./src/merchandiser/spk-doc'),
        SPKItem: require('./src/merchandiser/spk-item')
    },
    map: require("./src/map"),
    validator: require("./test/validator")
}
