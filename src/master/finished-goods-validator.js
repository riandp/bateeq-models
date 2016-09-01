require("should");
var validateComponent = require('./component-validator');

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
 
    data.should.have.property('uom');
    data.uom.should.instanceof(String);  
    
    data.should.have.property('tags');
    data.tags.should.instanceof(String);

    data.should.have.property('pictures');
    data.pictures.should.instanceof(Array); 
    
    data.should.have.property('components');
    data.components.should.instanceof(Array);
    for (var component of data.components)
        validateComponent(component);
};