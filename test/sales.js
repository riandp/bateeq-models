var validate = require('../src/validator').sales;

it("#01. SalesDoc should valid", function(){
    var SalesDoc = require('../src/sales/sales-doc');
    validate.salesDoc(new SalesDoc());
}) 
 
it("#02. PromoDoc should valid", function(){
    var Promo = require('../src/sales/promo-doc');
    validate.promoDoc(new Promo());
})

it("#03. Promo Product should valid", function(){
    var PromoProduct = require('../src/sales/promo-product');
    validate.promoProduct(new PromoProduct());
})

it("#04. Promo Discount should valid", function(){
    var PromoDiscount = require('../src/sales/promo-discount');
    validate.promoDiscount(new PromoDiscount());
})

it("#05. Reward Type should valid", function(){
    var RewardType = require('../src/sales/reward-type');
    validate.rewardType(new RewardType());
})
