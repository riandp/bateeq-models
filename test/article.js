var validate = require('./validator').article;

it("#01. ArticleApproval should valid", function(){
    var ArticleApproval = require('../src/article/article-approval');
    validate.articleApproval(new ArticleApproval());
})

it("#02. ArticleVariant should valid", function(){
    var ArticleVariant = require('../src/article/article-variant');
    validate.articleVariant(new ArticleVariant());
})

it("#03. ArticleCategory should valid", function(){
    var ArticleCategory = require('../src/article/article-category');
    validate.articleCategory(new ArticleCategory());
})

it("#04. ArticleColor should valid", function(){
    var ArticleColor = require('../src/article/article-color');
    validate.articleColor(new ArticleColor());
})

it("#05. ArticleCostCalculationDetail should valid", function(){
    var ArticleCostCalculationDetail = require('../src/article/article-cost-calculation-detail');
    validate.articleCostCalculationDetail(new ArticleCostCalculationDetail());
})

it("#06. ArticleCostCalculation should valid", function(){
    var ArticleCostCalculation = require('../src/article/article-cost-calculation');
    validate.articleCostCalculation(new ArticleCostCalculation());
})

it("#07. ArticleMotif should valid", function(){
    var ArticleMotif = require('../src/article/article-motif');
    validate.articleMotif(new ArticleMotif());
})

it("#08. ArticleOrigin should valid", function(){
    var ArticleOrigin = require('../src/article/article-origin');
    validate.articleOrigin(new ArticleOrigin());
})

it("#09. ArticleSeason should valid", function(){
    var ArticleSeason = require('../src/article/article-season');
    validate.articleSeason(new ArticleSeason());
})

it("#10. ArticleSize should valid", function(){
    var ArticleSize = require('../src/article/article-size');
    validate.articleSize(new ArticleSize());
})

it("#11. ArticleStyle should valid", function(){
    var ArticleStyle = require('../src/article/article-style');
    validate.articleStyle(new ArticleStyle());
})

it("#12. ArticleSubCategory should valid", function(){
    var ArticleSubCategory = require('../src/article/article-sub-category');
    validate.articleSubCategory(new ArticleSubCategory());
})

it("#13. ArticleType should valid", function(){
    var ArticleType = require('../src/article/article-type');
    validate.articleType(new ArticleType());
})

it("#14. Article should valid", function(){
    var Article = require('../src/article/article');
    validate.article(new Article());
})