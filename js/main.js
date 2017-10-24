requirejs.config({
    paths: {
        'jquery': 'externals/jquery.min',
        'jqueryui': 'externals/jquery-ui',
        'mustache': "externals/mustache.min"
    }
});


require(["core/Router", 'config/routes'], function(Router, routes) {
    routes.loadConfig();
    (new Router()).init();
});