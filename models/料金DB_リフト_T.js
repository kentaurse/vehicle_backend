const mongoose = require('mongoose');

const 料金DB_リフト_T_schema = new mongoose.Schema({
  検索key: String,
  荷主リフトオフ: Number,
  荷主リフトオン: Number,
  荷主保管1日: Number,
  下払リフトオフ: Number,
  下払リフトオン: Number,
  下払保管1日: Number,
  荷主保管課税: Boolean,
  下払保管課税: Boolean,
});

module.exports = mongoose.model('料金DB_リフト_T', 料金DB_リフト_T_schema);
