module.exports = {
    auth: {
        account: require("./auth/account-validator"),
        profile: require("./auth/profile-validator"),
        role: require("./auth/role-validator")
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
        article: {
            articleApproval: require("./master/article/article-approval-validator"),
            articleBrand: require("./master/article/article-brand-validator"),
            articleCategory: require("./master/article/article-category-validator"),
            articleColor: require("./master/article/article-color-validator"),
            articleCostCalculationDetail: require("./master/article/article-cost-calculation-detail-validator"),
            articleCostCalculation: require("./master/article/article-cost-calculation-validator"),
            articleCounter: require("./master/article/article-counter-validator"),
            articleMaterial: require("./master/article/article-material-validator"),
            articleMotif: require("./master/article/article-motif-validator"),
            articleOrigin: require("./master/article/article-origin-validator"),
            articleSeason: require("./master/article/article-season-validator"),
            articleSize: require("./master/article/article-size-validator"),
            articleSubCounter: require("./master/article/article-sub-counter-validator"),
            articleTheme: require("./master/article/article-theme-validator"),
            articleType: require("./master/article/article-type-validator"),
            article: require("./master/article/article-validator"),
            articleVariant: require("./master/article/article-variant-validator")
        },
        item: require("./master/item-w-component-validator"),
        component: require("./master/component-validator"),
        finishedGoods: require("./master/finished-goods-validator"),
        material: require("./master/material-validator")
    },
    manufacture: {
        fabricConsumptionDocument: require("./manufacture/fabric-consumption-document-validator"),
        fabricConsumptionArticle: require("./manufacture/fabric-consumption-article-validator"),
        fabricConsumptionItem: require("./manufacture/fabric-consumption-item-validator"),
        costCalculationDocument: require("./manufacture/cost-calculation-document-validator"),
        costCalculationArticle: require("./manufacture/cost-calculation-article-validator"),
        costCalculationItem: require("./manufacture/cost-calculation-item-validator"),
        finishingItem: require("./manufacture/finishing-item-validator"),
        finishing: require("./manufacture/finishing-validator"),
    },
    merchandiser: {
        SPKDoc: require("./merchandiser/spk-doc-validator"),
        SPKItem: require("./merchandiser/spk-item-validator"),
    }
};
