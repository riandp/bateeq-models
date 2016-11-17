module.exports = {
    auth: {
        type: {
            Account: 'account',
            Profile: 'profile',
            Role: 'role'
        },
        collection: {
            Account: 'accounts',
            Role: 'roles'
        }
    },
    inventory: {
        StockIn: 'stock-ins',
        StockOut: 'stock-outs',
        Inventory: 'inventories',
        InventoryMovement: 'inventory-movements',
        TransferInDoc: 'transfer-in-docs',
        TransferOutDoc: 'transfer-out-docs',
        FinishedGoodsDoc: 'finished-goods-docs',
        ExpeditionDoc: 'expedition-docs'
    },
    manufacture: {
        Finishing: 'finishings',
        CostCalculationDocument: 'cost-calculation-documents',
        FabricConsumptionDocument: 'fabric-consumption-documents'
    }, 
    master: {
        Item: 'items',
        FinishedGoods: 'items',
        Material:'items',
        article: {
            ArticleApproval: 'article-approvals',
            ArticleBrand: 'article-brands',
            ArticleCategory: 'article-categories',
            ArticleColor: 'article-colors',
            ArticleCostCalculationDetail: 'article-cost-calculation-details',
            ArticleCostCalculation: 'article-cost-calculations',
            ArticleCounter: 'article-counters',
            ArticleMaterial: 'article-materials',
            ArticleMotif: 'article-motifs',
            ArticleOrigin: 'article-origins',
            ArticleSeason: 'article-seasons',
            ArticleSize: 'article-sub-sizes',
            ArticleSubCounter: 'article-sub-counters',
            ArticleTheme: 'article-themes',
            ArticleType: 'article-types',
            ArticleVariant: 'article-variants',
            Article: 'articles',
        },
        Module: 'modules',
        Bank: 'banks',
        CardType: 'card-types', 
        Store: 'stores',
        Storage: 'storages',
        Supplier: 'suppliers',
        StoreShift: 'store-shifts'
    },
    merchandiser: {
        SPKDoc: 'spk-docs'
    }, 
    sales: {
        SalesDoc: 'sales-docs',
        Promo: 'promos'
    }
};