const mongoose = require('mongoose');

const 料金DB_高速_T_schema = new mongoose.Schema({
  検索key: String,
  金額: Number,
});

module.exports = mongoose.model('料金DB_高速_T', 料金DB_高速_T_schema);
