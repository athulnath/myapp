require(["core/Config"], function(Config) {
    Config.addRoute({
            path: "/", 
            controller: "HomeController"
        }).addRoute({
            path: "/add", 
            controller: "AddController"
        });
});