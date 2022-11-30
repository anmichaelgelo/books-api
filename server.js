const express = require('express');
const app = express();

// Configuration
require('dotenv').config();
const PORT = process.env.PORT;
const MONGODB = process.env.MONGODB_URI;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log("Connected to port " + PORT);
});