define(["jquery", "mustache"], function($, Mustache){

    function render() {
        $.get('templates/home.html', function(template) {
             var rendered = Mustache.render(template, {note1: "data 1", note2: "data 2"});
            $("#app").html(rendered);
        });
    }

    return {
        render:render
    }
});