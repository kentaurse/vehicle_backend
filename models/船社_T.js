const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  船社名称: String,
  カウント: Number,
  担当: String,
  TEL: String,
  FAX: String,
  住所: String,
});

module.exports = mongoose.model('User', userSchema);