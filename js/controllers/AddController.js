define(['models/Note', 'views/AddView'], function(Note, AddView) {

    function init(){
        AddView.render();
    }

    return {
        init: init
    }

});