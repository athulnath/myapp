define(['core/Config'], function(Config){

    function Router() {

    }

    Router.prototype.init = function() {
        this.initRoute();
        crossroads.routed.add(console.log, console); //log all routes
        hasher.initialized.add(this.parseHash); //parse initial hash
        hasher.changed.add(this.parseHash); //parse hash changes
        hasher.init(); //start listening for history change
    }

    Router.prototype.parseHash = function(newHash, oldHash) {
        crossroads.parse(newHash);
    }
    
    Router.prototype.initRoute = function(newHash, oldHash) {
        var routes = Config.getRoutes();
        console.log(routes);
        for(var key in routes) {
            this.addRoute(routes[key].path, routes[key].controller);
        }
    }

    Router.prototype.addRoute = function(routeName, controllerName) {
        crossroads.addRoute(routeName, function() {
            require(['controllers/' + controllerName], function(controller) {
                controller.init();
            });
        });
    }

    Router.prototype.setPath = function(path) {
        hasher.setHash(path);
    }

    return Router;
});