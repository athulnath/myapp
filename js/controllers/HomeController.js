define(['models/Note', 'views/HomeView'], function(Note, HomeView) {

    function init(){
        HomeView.render();
    }

    return {
        init: init
    }

});