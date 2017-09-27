define(["jquery", "mustache", "core/View"], function($, Mustache, View){

    function HomeView() {
        View.call(this);
    }

    HomeView.prototype = Object.create(View.prototype);

    HomeView.prototype.render = function(){
        this.renderToApp("home.html", {note1: "data 1", note2: "data 2"} );
    }

    return HomeView;
});