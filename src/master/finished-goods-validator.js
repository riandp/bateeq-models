require("should");
var validateItem = require('./item-validator');

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);

    data.should.have.property('articleId');
    data.articleId.should.instanceof(Object);

    data.should.have.property('code');
    data.code.should.instanceof(String);

    data.should.have.property('name');
    data.name.should.instanceof(String);

    data.should.have.property('description');
    data.description.should.instanceof(String); 

    data.should.have.property('pictures');
    data.pictures.should.instanceof(Array); 
    
    data.should.have.property('items');
    data.items.should.instanceof(Array);
    for (var item of data.items)
        validateItem(item);
};