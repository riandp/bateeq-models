require("should"); 
var validateItemWithComponent = require('./item-w-component-validator');

module.exports = function(data) {
    validateItemWithComponent(data);

    data.should.have.property('articleId');
    data.articleId.should.instanceof(Object);

    // data.should.have.property('pictures');
    // data.pictures.should.instanceof(Array);  
};