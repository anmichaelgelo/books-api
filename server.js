const express = require('express');
const cors = require('cors');
const app = express();

// Configuration
require('dotenv').config();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/books', require('./controllers/books'));

app.get('/', (req, res) => {
    res.json('Hello World!');
});

app.get('*', (req, res) => {
    res.status(404).json('404 | Page not found');
});

app.listen(PORT, () => {
    console.log("Connected to port " + PORT);
});