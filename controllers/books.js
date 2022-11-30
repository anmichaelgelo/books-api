const express = require('express');
const books = express.Router();
const db = require('../models');
const BookSeeder = require('../seeders/books_seeder');

// INDEX
books.get('/', (req, res) => {
    db.Book.find()
        .then(books => {
            res.json(books);
        })
        .catch(err => {
            // console.log(err);
            res.status(404).json({
                message: "Failed to fetch records"
            });
        });
});

// SHOW
books.get('/:id', (req, res) => {
    db.Book.findById(req.params.id)
        .then(book => {
            res.send(book);
        })
        .catch(err => {
            // console.log(err);
            res.status(404).json({
                message: "ObjectID not found"
            });
        })
});

// CREATE
books.post('/', (req, res) => {
    db.Book.create(req.body)
        .then(() => {
            res.status(200).json({
                message: "Book created successfully!"
            })
        })
        .catch(err => {
            // console.log(err)
            res.status(400).json({
                message: "Failed to create"
            })
        });
});

// UPDATE
books.put('/:id', (req, res) => {
    db.Book.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.status(200).json({
                message: "Book updated successfully!"
            })
        })
        .catch(err => {
            // console.log(err);
            res.status(400).json({
                message: "Failed to update"
            })
        });
});

books.delete('/:id', (req, res) => {
    db.Book.findByIdAndDelete(req.params.id)
        .then(() => {
            res.status(200).json({
                message: "Book deleted successfully!"
            })
        })
        .catch(err => {
            // console.log(err);
            res.status(400).json({
                message: "Failed to delete"
            })
        });
});

// SEED
books.get('/seed', (req, res) => {
    db.Book.insertMany(BookSeeder)
        .then(() => {
            res.status(200).json({
                message: 'Seed successful'
            });
        })
        .catch(err => {
            // console.log(err);
            res.status(400).json({
                message: "Failed to seed"
            });
        })
});

module.exports = books;