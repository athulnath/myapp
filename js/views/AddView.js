define(["jquery", "core/View"], function($, View){

    function AddView() {
        View.call(this);
    }

    AddView.prototype = Object.create(View.prototype);

    AddView.prototype.render = function(){
        this.renderToApp("addnote.html");
    }

    return AddView;
});