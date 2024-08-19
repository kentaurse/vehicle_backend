const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  作業地名称: String,
  取場所: Number,
  配達場所: Number,
  搬入返却場所: Number,
  保管場所: String,
  住所: String,
  依頼書備考コメント: String,
  TEL: String,
  担当者: String,
});

module.exports = mongoose.model('User', userSchema);