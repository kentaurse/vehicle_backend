const mongoose = require('mongoose');

const 協力会社_T_schema = new mongoose.Schema({
  配車名称: String,
  カウント: Number,
  担当: String,
  アドレス: String,
  CC: Number,
  TEL: String,
  FAX: String,
  住所: String,
});

module.exports = mongoose.model('協力会社_T', 協力会社_T_schema);
