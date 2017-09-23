(function() {
    app.config.addRoute('/', function() {
        alert('home');
    })
       .addRoute('/news', function() {
           alert("news");
       });

})(window.app = window.app || {});