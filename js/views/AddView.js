define(["jquery", "mustache"], function($, Mustache){

    function render() {
        $.get('templates/addnote.html', function(template) {
             var rendered = Mustache.render(template);
            $("#app").html(rendered);
        });

    }

    return {
        render:render
    }
});