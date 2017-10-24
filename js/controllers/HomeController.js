define(['models/Note', 'views/HomeView', 'jquery', 'jqueryui'], function(Note, HomeView, $) {

    function init(){
        $("#draggable").draggable();
        (new HomeView()).render();
    }

    return {
        init: init
    }

});