define(["jquery"], function($){

    function render() {
        var initScreenSample = '<ul><li>Note 1</li><li>Note 2</li></ul>'+
                                    '<div class="js-notes-container"><a href="#add">Add</a></div>';
        $("#app").html(initScreenSample);
    }

    return {
        render:render
    }
});