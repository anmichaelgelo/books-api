const mongoose = require('mongoose');
const { Schema } = mongoose.Schema();

const BookSchema = new Schema({
    "title": {
        type: String, 
        required: true
    },
    "description": String,
    "year": {
        type: Number,
        default: 2014
    },
    "quantity": {
        type: Number,
        required: true
    },
    "imageURL": {
        type: String,
        default: "/assets/shinobi-initiative.jpeg"
    }
});

const Book = mongoose.model('books', BookSchema);

module.exports = Book;