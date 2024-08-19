const mongoose = require('mongoose');

const 料金DB_庸車3軸_T_schema = new mongoose.Schema({
  検索key: String,
  金額: Number,
  更新日時: Date,
});

module.exports = mongoose.model('料金DB_庸車3軸_T', 料金DB_庸車3軸_T_schema);
