const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

var ideas = mongoose.model('ideas', formSchema);

module.exports = ideas;  
