define(["jquery"], function($){

    function render() {
        $.get('templates/addnote.html', function(template) {
            $("#app").html(template);
        });
    }

    return {
        render:render
    }
});