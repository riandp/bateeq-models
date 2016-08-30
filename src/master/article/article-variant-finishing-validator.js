require("should");

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

    data.should.have.property('size');
    data.size.should.instanceof(String);

    // data.should.have.property('color');
    // data.color.should.instanceof(String);

    data.should.have.property('pictures');
    data.pictures.should.instanceof(Array);
};