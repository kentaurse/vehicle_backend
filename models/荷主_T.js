const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  ID: Number,
  荷主名称: String,
  カウント: Number,
  担当: String,
  電話: String,
  FAX: String,
  住所: String,
  作成日: Date,
});

module.exports = mongoose.model('User', userSchema);