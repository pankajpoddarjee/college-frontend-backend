const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/collegeadmission');

const connection = mongoose.connection;
connection.on('connected', () => {
  console.log('MongoDB database connection established successfully');
});