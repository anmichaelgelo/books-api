require('dotenv').config();
const mongoose = require('mongoose');
const MONGODB = process.env.MONGO_URI;

mongoose.connect(MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err){ 
        console.log(err) 
    } else{ 
        console.log('connected to ' + MONGODB)
    }
});

module.exports.Book = require('./books');