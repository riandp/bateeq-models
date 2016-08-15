require("should");

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);

    data.should.have.property('username');
    data.username.should.instanceof(String);

    data.should.have.property('password');
    data.password.should.instanceof(String);

    data.should.have.property('isLocked');
    data.isLocked.should.instanceof(Boolean); 
};