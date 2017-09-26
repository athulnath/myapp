requirejs.config({
    paths: {
        'jquery': 'externals/jquery.min',
    }
});


require(["controllers/HomeController", "utils/Router"], function(HomeController, Router) {
    var router = new Router();
    router.init();
});