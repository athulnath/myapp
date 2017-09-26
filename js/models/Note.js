define(function(){

    function Note(title) {
        this.title = title;
        this.desc = '';
        this.createdAt = new Date();
    }

    Note.prototype.setDesc = function(desc) {
        this.desc = dec;
    }

    return Note;
});