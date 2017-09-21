
var TaskController = function (model, view) {
    this.model = model;
    this.view = view;
    this.init();
};

TaskController.prototype = {

    init: function () {
        this.enable();
    },

    enable: function () {
        this.view.addTaskEvent.attach(this.addTask.bind(this));
        return this;
    },

    addTask: function (sender, args) {
        this.model.addTask(args.task);
    }

};