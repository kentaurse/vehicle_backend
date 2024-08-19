const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  検索key: String,
  金額: Number,
  更新日時: Date,
});

module.exports = mongoose.model('User', userSchema);