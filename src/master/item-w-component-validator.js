require("should");
var validateItem = require('./item-validator');
var validateComponent = require('./component-validator');

module.exports = function(data) {
    validateItem(data);  
    for (var component of data.components){
        validateComponent(component);
    }
}; 