define(["jquery", "mustache"], function($, Mustache){

    function View() {

    }

    View.prototype.renderToApp = function(view, data) {
        $.get('templates/' + view, function(template) {
            $("#app").html(Mustache.render(template, data));
        });
    }

    return View;
});