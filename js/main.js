requirejs.config({
    paths: {
        'jquery': 'externals/jquery.min',
    }
});


require(["controllers/HomeController"], function(HomeController) {
    HomeController.init();
});