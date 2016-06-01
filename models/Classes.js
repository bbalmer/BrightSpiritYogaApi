var mongoose = require('mongoose');

var ClassSchema = new mongoose.Schema({
    type: String,
    day: String,
    date: Date,
    start: String,
    end: String,
    class: String,
    updated_at: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Classes', ClassSchema);