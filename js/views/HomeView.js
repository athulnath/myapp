define(["jquery"], function($){

    function render() {
        $.get('templates/home.html', function(template) {
            $("#app").html(template);
        });
    }

    return {
        render:render
    }
});