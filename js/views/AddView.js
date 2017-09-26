define(["jquery"], function($){

    function render() {
        var initScreenSample = '<input type="text"><input type="button" value="Add note">'+
                                    '<div class="js-notes-container"><a href="#/">Home</a></div>';
        $("#app").html(initScreenSample);
    }

    return {
        render:render
    }
});