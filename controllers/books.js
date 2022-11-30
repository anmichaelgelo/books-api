const express = require('express');
const books = express.Router();
const Book = require('../models/books');
const BookSeeder = require('../seeders/books_seeder');

// INDEX
books.get('/', (req, res) => {
    Book.find()
        .then(books => {
            console.log(books);
            res.status(200).json(books);
        })
        .catch(err => {
            res.status(400).json({
                error: err
            });
        });
});

// SHOW
// books.get('/:id', (req, res) => {
//     Book.findById(req.params.id)
//         .then(book => {
//             res.json(book);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         })
// });

// SEED
books.get('/seed', (req, res) => {
    Book.insertMany(BookSeeder)
        .then(() => {
            res.status(200).json({
                is_success: true,
                message: "Seed successful"
            });
        })
        .catch(err => {
            res.status(404).json({
                err: err
            });
        });
});

module.exports = books;