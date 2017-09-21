(function(app) {

    function Router() {

    }

    Router.prototype.init = function() {
        crossroads.routed.add(console.log, console); //log all routes
        hasher.initialized.add(this.parseHash); //parse initial hash
        hasher.changed.add(this.parseHash); //parse hash changes
        hasher.init(); //start listening for history change
    }

    Router.prototype.parseHash = function(newHash, oldHash) {
        crossroads.parse(newHash);
    }
    
    Router.prototype.addRoute = function(routeName, handler) {
        crossroads.addRoute(routeName, handler);
    }

    Router.prototype.setPath = function(path) {
        hasher.setHash(path);
    }

    window.app.Router = Router;

})(window.app = window.app || {});