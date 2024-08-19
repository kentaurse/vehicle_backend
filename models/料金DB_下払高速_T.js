const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  検索key: String,
  金額: Number,
});

module.exports = mongoose.model('User', userSchema);