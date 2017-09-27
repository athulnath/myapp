define(function(){
    
    var _routes = [];

    function getRoutes() {
        return this._routes;
    }

    function addRoute(route) {
        this._routes.push(route);
        return this;
    }

    return {
        addRoute: addRoute
    };

});