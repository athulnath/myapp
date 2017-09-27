requirejs.config({
    paths: {
        'jquery': 'externals/jquery.min',
    }
});


require(["core/Router", 'config/routes'], function(Router, routes) {
    routes.loadConfig();
    (new Router()).init();
});