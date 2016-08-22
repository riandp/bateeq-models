module.exports = {
    core: {
        module: require("./core/module-validator"),
        moduleSeed: require("./core/module-seed-validator"),
        account: require("./core/account-validator"),
        article: {
            articleApproval: require("./core/article/article-approval-validator"),
            articleBrand: require("./core/article/article-brand-validator"),
            articleCategory: require("./core/article/article-category-validator"),
            articleColor: require("./core/article/article-color-validator"),
            articleCostCalculationDetail: require("./core/article/article-cost-calculation-detail-validator"),
            articleCostCalculation: require("./core/article/article-cost-calculation-validator"),
            articleCounter: require("./core/article/article-counter-validator"),
            articleMaterial: require("./core/article/article-material-validator"),
            articleMotif: require("./core/article/article-motif-validator"),
            articleOrigin: require("./core/article/article-origin-validator"),
            articleSeason: require("./core/article/article-season-validator"),
            articleSize: require("./core/article/article-size-validator"),
            articleSubCounter: require("./core/article/article-sub-counter-validator"),
            articleTheme: require("./core/article/article-theme-validator"),
            articleType: require("./core/article/article-type-validator"),
            article: require("./core/article/article-validator"),
            articleVariant: require("./core/article/article-variant-validator")
        }
    },
    inventory: {
            expeditionDoc: require("./inventory/expedition-doc-validator"),
            expeditionSPK: require("./inventory/expedition-spk-validator"),
            finishedGoodsDoc: require("./inventory/finished-goods-doc-validator"),
            inventoryMovementApproval: require("./inventory/inventory-movement-validator"),
            inventory: require("./inventory/inventory-validator"),
            inventoryMovement: require("./inventory/inventory-movement-validator"),
            storage: require("./inventory/storage-validator"),
            transferInDoc: require("./inventory/transfer-in-doc-validator"),
            transferInItem: require("./inventory/transfer-in-item-validator"),
            transferOutDoc: require("./inventory/transfer-out-doc-validator"),
            transferOutItem: require("./inventory/transfer-out-item-validator"),
            supplier: require("./inventory/supplier-validator"),
    },
    master: {
            item: require("./master/item-validator"),
            finishedGoods: require("./master/finished-goods-validator"),
    },
    manufacture: {
            finishingItem: require("./manufacture/finishing-item-validator"),
            finishing: require("./manufacture/finishing-validator"),
    },
    merchandiser: {
            SPKDoc: require("./merchandiser/spk-doc-validator"),
            SPKItem: require("./merchandiser/spk-item-validator"),
    }
};