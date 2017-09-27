define(['models/Note', 'views/AddView'], function(Note, AddView) {

    function init(){
        (new AddView()).render();
    }

    return {
        init: init
    }

});