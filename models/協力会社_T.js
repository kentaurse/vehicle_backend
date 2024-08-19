const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  配車名称: String,
  カウント: Number,
  担当: String,
  アドレス: String,
  CC: Number,
  TEL: String,
  FAX: String,
  住所: String,
});

module.exports = mongoose.model('User', userSchema);