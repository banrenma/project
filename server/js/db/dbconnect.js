var mongoose = require('mongoose');

console.log('---------------------------connect')
mongoose.connect('mongodb://localhost:27017/test');


module.exports = mongoose;