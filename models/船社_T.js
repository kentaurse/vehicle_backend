const mongoose = require('mongoose');

const 船社_T_schema = new mongoose.Schema({
  船社名称: String,
  カウント: Number,
  担当: String,
  TEL: String,
  FAX: String,
  住所: String,
});

module.exports = mongoose.model('船社_T', 船社_T_schema);
