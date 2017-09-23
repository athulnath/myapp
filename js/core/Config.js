(function(app) {

    function Config() {
        this._routes = []

        this.addRoute = function(path, controller) {
            this._routes.push({path: path, controller: controller});
            return this;
        }

        this.getRoutes = function() {
            return this._routes;
        }
    }

    window.app.config = new Config();

})(window.app = window.app || {});