var validate = require('../src/validator').sales;

it("#01. SalesDoc should valid", function(){
    var SalesDoc = require('../src/sales/sales-doc');
    validate.salesDoc(new SalesDoc());
}) 

it("#02. Promo should valid", function(){
    var Promo = require('../src/sales/promo');
    validate.promo(new Promo());
})

it("#03. PromoCriteria should valid", function(){
    var PromoCriteria = require('../src/sales/promo-criteria');
    validate.promoCriteria(new PromoCriteria());
})

it("#04. PromoReward should valid", function(){
    var PromoReward = require('../src/sales/promo-reward');
    validate.promoReward(new PromoReward());
})

it("#05. PromoCriteriaSelectedProduct should valid", function(){
    var PromoCriteriaSelectedProduct = require('../src/sales/promo-criteria-selected-product');
    validate.promoCriteriaSelectedProduct(new PromoCriteriaSelectedProduct());
})

it("#06. PromoRewardDiscountProduct should valid", function(){
    var PromoRewardDiscountProduct = require('../src/sales/promo-reward-discount-product');
    validate.promoRewardDiscountProduct(new PromoRewardDiscountProduct());
})

it("#07. PromoCriteriaPackage should valid", function(){
    var PromoCriteriaPackage = require('../src/sales/promo-criteria-package');
    validate.promoCriteriaPackage(new PromoCriteriaPackage());
})

it("#08. PromoRewardSpecialPrice should valid", function(){
    var PromoRewardSpecialPrice = require('../src/sales/promo-reward-special-price');
    validate.promoRewardSpecialPrice(new PromoRewardSpecialPrice());
})

it("#09. SalesReturnDoc should valid", function(){
    var SalesReturnDoc = require('../src/sales/sales-return-doc');
    validate.salesReturnDoc(new SalesReturnDoc());
}) 

