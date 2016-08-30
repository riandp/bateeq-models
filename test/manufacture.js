var validate = require('../src/validator').manufacture;

it("#01. FinishingItem should valid", function(){
    var FinishingItem = require('../src/manufacture/finishing-item');
    validate.finishingItem(new FinishingItem());
}) 

it("#02. Finishing should valid", function(){
    var Finishing = require('../src/manufacture/finishing');
    validate.finishing(new Finishing());
})  

it("#03. Fabric Consumption Item should valid", function(){
    var FabricConsumptionItem = require('../src/manufacture/fabric-consumption-item');
    validate.fabricConsumptionItem(new FabricConsumptionItem());
})  

it("#04. Fabric Consumption Article should valid", function(){
    var FabricConsumptionArticle = require('../src/manufacture/fabric-consumption-article');
    validate.fabricConsumptionArticle(new FabricConsumptionArticle());
})  

it("#05. Fabric Consumption Document should valid", function(){
    var FabricConsumptionDocument = require('../src/manufacture/fabric-consumption-document');
    validate.fabricConsumptionDocument(new FabricConsumptionDocument());
})   

it("#06. Cost Calculation Item should valid", function(){
    var CostCalculationItem = require('../src/manufacture/cost-calculation-item');
    validate.costCalculationItem(new CostCalculationItem());
})  

it("#07. Cost Calculation Article should valid", function(){
    var CostCalculationArticle = require('../src/manufacture/cost-calculation-article');
    validate.costCalculationArticle(new CostCalculationArticle());
})  

it("#08. Cost Calculation Document should valid", function(){
    var CostCalculationDocument = require('../src/manufacture/cost-calculation-document');
    validate.costCalculationDocument(new CostCalculationDocument());
})   