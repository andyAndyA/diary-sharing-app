let mongoose = require('mongoose');

let diariesDOM = new mongoose.Schema(
    {
        title: {type: String, default: 'Untitled'},
        text: {type: String, default: ''},
        date: {type: Date, default: new Date()},
        likes: {type: Number, default: 1},
        comments: {type: Array, default: []},


        /*
            TODO:
            This will be changed later to automatically detect the author's id.
            Currently anonymous by defualt.
         */
        author: {type: String, default: 'Anonymous'},
        sharing: {type: Boolean, default: true}
    },
    {
        collection: 'diariesdb'
    }
);

module.exports = mongoose.model('Diary', diariesDOM);