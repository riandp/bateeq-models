var test = function (name, path) {
    describe(name, function () {
        require(path);
    })
}

test('@article', './article');
test('@inventory', './inventory');
test('@manufacture', './manufacture');
test('@core', './core');  
test('@master', './master');  
test('@master/article', './master-article');  
test('@merchandiser', './merchandiser'); 
