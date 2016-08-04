var validate = require('./validator').merchandisher;

it("#01. SPKDoc should valid", function(){
    var SPKDoc = require('../src/merchandisher/spk-doc');
    validate.SPKDoc=(new SPKDoc());
}) 