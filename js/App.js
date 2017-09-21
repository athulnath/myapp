
$(function() {

var route =  new window.app.Router();

route.addRoute('home');
route.addRoute('/news', function(){
  alert("new path");
});

route.init();
 
//update URL fragment generating new history record
route.setPath('home');

});