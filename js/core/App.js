(function(app) {

    function App() {
      this.router = new app.Router();
    }

    App.prototype.getRouter = function() {
        return this.router;
    }

    App.prototype.init = function() {
        this.router.init();
    }

    App.prototype.parseHash = function(newHash, oldHash) {
        crossroads.parse(newHash);
    }
    
    window.app.App = App;

})(window.app = window.app || {});