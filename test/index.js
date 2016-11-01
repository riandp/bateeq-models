var test = function (name, path) {
    describe(name, function () {
        require(path);
    })
}

test('@auth', './auth-test');
test('@article', './article');
test('@inventory', './inventory');
test('@manufacture', './manufacture'); 
test('@master', './master');  
test('@master/article', './master-article');  
test('@merchandiser', './merchandiser'); 
