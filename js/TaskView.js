var TaskView = function (model) {
    this.model = model;
    this.addTaskEvent = new Event(this);
    this.init();
};

TaskView.prototype = {
    init: function() {
        this.createChildren()
            .enable();
    },

    createChildren: function() {
        // cache the document object
        this.$container = $('.js-container');
        this.$addTaskButton = this.$container.find('.js-add-task-button');
        this.$taskTextBox = this.$container.find('.js-task-textbox');
        this.$tasksContainer = this.$container.find('.js-tasks-container');
        return this;
    },

   enable: function () {

        this.$addTaskButton.click(this.addTaskButton.bind(this));

        /**
         * Event Dispatcher
         */
        this.model.addTaskEvent.attach(this.addTask.bind(this));

        return this;
    },

    addTaskButton: function() {
        this.addTaskEvent.notify({
            task: this.$taskTextBox.val()
        });
    },

    show: function () {
        this.buildList();
    },

    buildList: function() {
        var tasks = this.model.getTasks();
        var html = "";
        var $tasksContainer = this.$tasksContainer;

        $tasksContainer.html("");

        var index = 0;
        for(var task in tasks) {
            html = "";
            if(tasks[task].taskStatus == "completed") {
                html += "<div style='color:green'>";
            } else {
                html += "<div>";
            }

            html += "<label><input type='checkbox' class='js-task' data-index='" + index + "' data-task-selected='false'>" + tasks[task].taskName + "</label></div>";
            $tasksContainer.append(html);
            index++;
        }
    },

     /* -------------------- Handlers From Event Dispatcher ----------------- */

    addTask: function () {
        this.show();
    }
    /* -------------------- End Handlers From Event Dispatcher ----------------- */
};
