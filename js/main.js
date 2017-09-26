requirejs.config({
    paths: {
        'jquery': 'externals/jquery.min',
    }
});


require(["core/Router"], function(Router) {
    (new Router()).init();
});