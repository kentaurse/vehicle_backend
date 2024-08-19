const mongoose = require('mongoose');

const 顧客_T_schema = new mongoose.Schema({
  顧客名称: String,
  カウント: Number,
  担当: String,
  TEL: String,
  FAX: String,
  住所: String,
});

module.exports = mongoose.model('顧客_T', 顧客_T_schema);
