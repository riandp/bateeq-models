var validate = require('../src/validator').inventory;

it("#01. InventoryMovement should valid", function(){
    var InventoryMovement = require('../src/inventory/inventory-movement');
    validate.inventoryMovement(new InventoryMovement());
}); 

it("#02. Inventory should valid", function(){
    var Inventory = require('../src/inventory/inventory');
    validate.inventory(new Inventory());
});

it("#03. TransferInDoc should valid", function(){
    var TransferInDoc = require('../src/inventory/transfer-in-doc');
    validate.transferInDoc(new TransferInDoc());
});

it("#04. TransferOutDoc should valid", function(){
    var TransferOutDoc = require('../src/inventory/transfer-out-doc');
    validate.transferOutDoc(new TransferOutDoc());
});

it("#05. ExpeditionDoc should valid", function(){
    var ExpeditionDoc = require('../src/inventory/expedition-doc');
    validate.expeditionDoc(new ExpeditionDoc());
});