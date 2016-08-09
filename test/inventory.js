var validate = require('./validator').inventory;

it("#01. InventoryMovement should valid", function(){
    var InventoryMovement = require('../src/inventory/inventory-movement');
    validate.inventoryMovement(new InventoryMovement());
}) 

it("#02. Inventory should valid", function(){
    var Inventory = require('../src/inventory/inventory');
    validate.inventory(new Inventory());
}) 

it("#03. StockIn should valid", function(){
    var StockIn = require('../src/inventory/stock-in');
    validate.stockIn(new StockIn());
}) 

it("#04. StockItem should valid", function(){
    var StockItem = require('../src/inventory/stock-item');
    validate.stockItem(new StockItem());
}) 

it("#05. StockOut should valid", function(){
    var StockOut = require('../src/inventory/stock-out');
    validate.stockOut(new StockOut());
}) 

it("#06. Storage should valid", function(){
    var Storage = require('../src/inventory/storage');
    validate.storage(new Storage());
}) 

it("#07. TransferInDoc should valid", function(){
    var TransferInDoc = require('../src/inventory/transfer-in-doc');
    validate.transferInDoc(new TransferInDoc());
}) 

it("#08. TransferOutDoc should valid", function(){
    var TransferOutDoc = require('../src/inventory/transfer-out-doc');
    validate.transferOutDoc(new TransferOutDoc());
}) 

it("#09. ExpeditionDoc should valid", function(){
    var ExpeditionDoc = require('../src/inventory/expedition-doc');
    validate.expeditionDoc(new ExpeditionDoc());
}) 