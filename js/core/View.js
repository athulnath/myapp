define(["jquery", "mustache"], function($, Mustache){

    function View() {
        this._basepath = "templates/";
    }

    View.prototype.renderToApp = function(view, data) {
        $.get(this._basepath + view, function(template) {
            $("#app").html(Mustache.render(template, data));
        });
    }

    return View;
});