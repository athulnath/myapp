define(['models/Note', 'views/HomeView'], function(Note, HomeView) {

    function init(){
        (new HomeView()).render();
    }

    return {
        init: init
    }

});