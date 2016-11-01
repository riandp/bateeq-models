var validate = require('../src/validator').master.article;

it("#01. ArticleApproval should valid", function(){
    var ArticleApproval = require('../src/master/article/article-approval');
    validate.articleApproval(new ArticleApproval());
})

it("#02. ArticleBrand should valid", function(){
    var ArticleBrand = require('../src/master/article/article-brand');
    validate.articleBrand(new ArticleBrand());
})
 
it("#03. ArticleCategory should valid", function(){
    var ArticleCategory = require('../src/master/article/article-category');
    validate.articleCategory(new ArticleCategory());
})

it("#04. ArticleColor should valid", function(){
    var ArticleColor = require('../src/master/article/article-color');
    validate.articleColor(new ArticleColor());
})

it("#05. ArticleCostCalculationDetail should valid", function(){
    var ArticleCostCalculationDetail = require('../src/master/article/article-cost-calculation-detail');
    validate.articleCostCalculationDetail(new ArticleCostCalculationDetail());
})

it("#06. ArticleCostCalculation should valid", function(){
    var ArticleCostCalculation = require('../src/master/article/article-cost-calculation');
    validate.articleCostCalculation(new ArticleCostCalculation());
})

it("#07. ArticleCounter should valid", function(){
    var ArticleCounter = require('../src/master/article/article-counter');
    validate.articleCounter(new ArticleCounter());
})

it("#08. ArticleMaterial should valid", function(){
    var ArticleMaterial = require('../src/master/article/article-material');
    validate.articleMaterial(new ArticleMaterial());
})

it("#09. ArticleMotif should valid", function(){
    var ArticleMotif = require('../src/master/article/article-motif');
    validate.articleMotif(new ArticleMotif());
})

it("#10. ArticleOrigin should valid", function(){
    var ArticleOrigin = require('../src/master/article/article-origin');
    validate.articleOrigin(new ArticleOrigin());
})

it("#11. ArticleSeason should valid", function(){
    var ArticleSeason = require('../src/master/article/article-season');
    validate.articleSeason(new ArticleSeason());
})

it("#12. ArticleSize should valid", function(){
    var ArticleSize = require('../src/master/article/article-size');
    validate.articleSize(new ArticleSize());
})

it("#13. ArticleSubCounter should valid", function(){
    var ArticleSubCounter = require('../src/master/article/article-sub-counter');
    validate.articleSubCounter(new ArticleSubCounter());
})

it("#14. ArticleTheme should valid", function(){
    var ArticleTheme = require('../src/master/article/article-theme');
    validate.articleTheme(new ArticleTheme());
})

it("#15. ArticleType should valid", function(){
    var ArticleType = require('../src/master/article/article-type');
    validate.articleType(new ArticleType());
})

it("#16. ArticleVariant should valid", function(){
    var ArticleVariant = require('../src/master/article/article-variant');
    validate.articleVariant(new ArticleVariant());
})


it("#17. Article should valid", function(){
    var Article = require('../src/master/article/article');
    validate.article(new Article());
})