define(["core/Config"], function(Config) {

    function loadConfig() {
        Config.addRoute({
                path: "/", 
                controller: "HomeController"
            }).addRoute({
                path: "/add", 
                controller: "AddController"
            });
    }

    return {
        loadConfig: loadConfig
    };

});