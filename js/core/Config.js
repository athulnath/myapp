define(function(){
    
    var _routes = [];

    function getRoutes() {
        return _routes;
    }

    function addRoute(route) {
        _routes.push(route);
        return this;
    }

    return {
        addRoute: addRoute,
        getRoutes: getRoutes
    };

});