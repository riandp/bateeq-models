var validate = require('../src/validator').promo;

it("#01. Promo should valid", function(){
    var Promo = require('../src/promo/promo-doc');
    validate.promoDoc(new Promo());
})

it("#02. Promo Product should valid", function(){
    var PromoProduct = require('../src/promo/promo-product');
    validate.promoProduct(new PromoProduct());
})

it("#03. Promo Discount should valid", function(){
    var PromoDiscount = require('../src/promo/promo-discount');
    validate.promoDiscount(new PromoDiscount());
})

it("#04. Reward Type should valid", function(){
    var RewardType = require('../src/promo/reward-type');
    validate.rewardType(new RewardType());
})
