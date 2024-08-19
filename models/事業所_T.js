const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  事業所コード: String,
  事業所名: String,
  連番更新日: Date,
  識別コード連番: Number,
});

module.exports = mongoose.model('User', userSchema);