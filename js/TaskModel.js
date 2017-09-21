var TaskModel = function() {
    
    this.tasks = [];
    this.selectedTasks = [];

    this.addTaskEvent = new Event(this);
}


TaskModel.prototype = {
    
    addTask: function(task) {
        this.tasks.push({
            taskName: task,
            taskStatus: "uncompleted"
        });
        this.addTaskEvent.notify();
    },

    getTasks: function() {
        return this.tasks;
    }

}