module.exports = {
    auth: {
        Account: require('./src/auth/account'),
        Profile: require('./src/auth/profile'),
        Role: require('./src/auth/role')
    },
    inventory: {
        InventoryMovement: require('./src/inventory/inventory-movement'),
        Inventory: require('./src/inventory/inventory'),
        Storage: require('./src/inventory/storage'),
        TransferInDoc: require('./src/inventory/transfer-in-doc'),
        TransferInItem: require('./src/inventory/transfer-in-item'),
        TransferOutDoc: require('./src/inventory/transfer-out-doc'),
        TransferOutItem: require('./src/inventory/transfer-out-item'),
        FinishedGoodsDoc: require('./src/inventory/finished-goods-doc'),
        ExpeditionDoc: require('./src/inventory/expedition-doc'),
        Supplier: require('./src/inventory/supplier')
    },
    manufacture: {
        FabricConsumptionDocument: require('./src/manufacture/fabric-consumption-document'),
        FabricConsumptionArticle: require('./src/manufacture/fabric-consumption-article'),
        FabricConsumptionItem: require('./src/manufacture/fabric-consumption-item'),
        CostCalculationDocument: require('./src/manufacture/cost-calculation-document'),
        CostCalculationArticle: require('./src/manufacture/cost-calculation-article'),
        CostCalculationItem: require('./src/manufacture/cost-calculation-item'),
        FinishingItem: require('./src/manufacture/finishing-item'),
        Finishing: require('./src/manufacture/finishing')
    },
    master: {
        FinishedGoods: require('./src/master/finished-goods'),
        Item: require('./src/master/item'),
        Material: require('./src/master/material'),
        Component: require('./src/master/component'),
        Module: require('./src/master/module'),
        article: {
            ArticleApproval: require('./src/master/article/article-approval'),
            ArticleBrand: require('./src/master/article/article-brand'),
            ArticleCategory: require('./src/master/article/article-category'),
            ArticleColor: require('./src/master/article/article-color'),
            ArticleCostCalculationDetail: require('./src/master/article/article-cost-calculation-detail'),
            ArticleCostCalculation: require('./src/master/article/article-cost-calculation'),
            ArticleCounter: require('./src/master/article/article-counter'),
            ArticleMaterial: require('./src/master/article/article-material'),
            ArticleMotif: require('./src/master/article/article-motif'),
            ArticleOrigin: require('./src/master/article/article-origin'),
            ArticleSeason: require('./src/master/article/article-season'),
            ArticleSize: require('./src/master/article/article-size'),
            ArticleSubCounter: require('./src/master/article/article-sub-counter'),
            ArticleTheme: require('./src/master/article/article-theme'),
            ArticleType: require('./src/master/article/article-type'),
            ArticleVariant: require('./src/master/article/article-variant'),
            Article: require('./src/master/article/article'),
        }, 
        Bank: require('./src/master/bank'),
        CardType: require('./src/master/card-type'), 
        Store: require('./src/master/store')
    },
    merchandiser: {
        SPK: require('./src/merchandiser/spk-doc'),
        SPKItem: require('./src/merchandiser/spk-item')
    }, 
    sales: {
        Sales: require('./src/sales/sales-doc'),
        SalesItem: require('./src/sales/sales-item'),
        SalesDetail: require('./src/sales/sales-detail'),
        Promo: require('./src/sales/promo-doc'),
        PromoProduct: require('./src/sales/promo-product'),
        PromoDiscount: require('./src/sales/promo-discount'),
        RewardType: require('./src/sales/reward-type') 
    },
    map: require("./src/map"),
    validator: require("./src/validator")
}
