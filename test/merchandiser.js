var validate = require('./validator').merchandiser;

it("#01. SPKDoc should valid", function(){
    var SPKDoc = require('../src/merchandiser/spk-doc');
    validate.SPKDoc=(new SPKDoc());
}) 