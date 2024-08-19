const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  ID: Number,
  識別コード: String,
  請求日: Date,
  配車組み: Number,
  部署コード: String,
  ピックチェック: Number,
  区分: String,
  未定: Number,
  送り状受領書作成: Number,
  荷主名: String,
  顧客名: String,
  配達先1: String,
  配達先住所1: String,
  配達先TEL1: String,
  配達先担当者1: String,
  積日1: Date,
  配達日1: Date,
  配達時間1: Date,
  基本料金1: Number,
  基本課税1: Number,
  '3軸料金1': Number,
  '3軸課税1': Number,
  CRU変更料金1: Number,
  CRU変更課税1: Number,
  配達先2: String,
  配達先住所2: String,
  配達先TEL2: String,
  配達先担当者2: String,
  積日2: Date,
  配達日2: Date,
  配達時間2: Date,
  基本料金2: Number,
  基本課税2: Number,
  '3軸料金2': Number,
  '3軸課税2': Number,
  CRU変更料金2: Number,
  CRU変更課税2: Number,
  配達先3: String,
  配達先住所3: String,
  配達先TEL3: String,
  配達先担当者3: String,
  積日3: Date,
  配達日3: Date,
  配達時間3: Date,
  基本料金3: Number,
  基本課税3: Number,
  '3軸料金3': Number,
  '3軸課税3': Number,
  CRU変更料金3: Number,
  CRU変更課税3: Number,
  取場所: String,
  搬入返却場所: String,
  船社: String,
  コンテナタイプ: String,
  コンテナサイズ: String,
  コンテナ種類: String,
  危険品: Number,
  コンテナNo: String,
  シール番号: String,
  TW: String,
  VOYNo: String,
  BKNo: String,
  BLNo: String,
  カット日: Date,
  船名: String,
  荷揚港: String,
  最終仕向: String,
  品名: String,
  個数: Number,
  荷姿: String,
  自社車番F1: String,
  自社車番S1: String,
  自社乗務員1: String,
  協力会社名: String,
  下払会社名1: String,
  下払料金1: Number,
  下払課税1: Number,
  下払自車1: Number,
  下払会社名2: String,
  下払料金2: Number,
  下払課税2: Number,
  下払自車2: Number,
  下払会社名3: String,
  下払料金3: Number,
  下払課税3: Number,
  下払自車3: Number,
  下払会社名4: String,
  下払料金4: Number,
  下払課税4: Number,
  下払自車4: Number,
  下払会社名5: String,
  下払料金5: Number,
  下払課税5: Number,
  下払自車5: Number,
  下払会社名6: String,
  下払料金6: Number,
  下払課税6: Number,
  下払自車6: Number,
  高速費: Number,
  入庫日: Date,
  出庫日: Date,
  荷主保管料金リフトオフ: Number,
  荷主保管料金リフトオン: Number,
  荷主保管料金1日: Number,
  荷主保管課税: Number,
  下払保管料金リフトオフ: Number,
  下払保管料金リフトオン: Number,
  下払保管料金1日: Number,
  下払保管課税: Number,
  依頼書備考1: Number,
  請求書備考: Number,
  送り状受領書備考: Number,
  スケール費: Number,
  シャーシ留置費: Number,
  その他費用: Number,
  依頼書備考2: Number,
  依頼書備考3: Number,
  重量: Number,
  その他課税: Number,
  自社車番F2: String,
  自社車番S2: String,
  自社乗務員2: String,
  自社車番F3: String,
  自社車番S3: String,
  自社乗務員3: String,
  自社車番F4: String,
  自社車番S4: String,
  自社乗務員4: String,
  自社車番F5: String,
  自社車番S5: String,
  自社乗務員5: String,
  自社車番F6: String,
  自社車番S6: String,
  自社乗務員6: String,
  保管場所: String,
  空バン返却: Number,
  CRU顧客名: String,
  軸数: Number,
  スケール費課税1: Number,
  シャーシ留置費課税1: Number,
  高速費2: String,
  スケール費2: String,
  スケール費課税2: Number,
  シャーシ留置費2: String,
  シャーシ留置費課税2: Number,
  その他費用2: String,
  その他課税2: Number,
  高速費3: String,
  スケール費3: String,
  スケール費課税3: Number,
  シャーシ留置費3: String,
  シャーシ留置費課税3: Number,
  その他費用3: String,
  その他課税3: Number,
  下払高速費1: String,
  下払スケール費1: String,
  下払スケール費課税1: Number,
  下払シャーシ留置費1: String,
  下払シャーシ留置費課税1: Number,
  下払その他費用1: String,
  下払その他課税1: Number,
  下払高速費2: String,
  下払スケール費2: String,
  下払スケール費課税2: Number,
  下払シャーシ留置費2: String,
  下払シャーシ留置費課税2: Number,
  下払その他費用2: String,
  下払その他課税2: Number,
  下払高速費3: String,
  下払スケール費3: String,
  下払スケール費課税3: Number,
  下払シャーシ留置費3: String,
  下払シャーシ留置費課税3: Number,
  下払その他費用3: String,
  下払その他課税3: Number,
  下払高速費4: String,
  下払スケール費4: String,
  下払スケール費課税4: Number,
  下払シャーシ留置費4: String,
  下払シャーシ留置費課税4: Number,
  下払その他費用4: String,
  下払その他課税4: Number,
  下払高速費5: String,
  下払スケール費5: String,
  下払スケール費課税5: Number,
  下払シャーシ留置費5: String,
  下払シャーシ留置費課税5: Number,
  下払その他費用5: String,
  下払その他課税5: Number,
  下払高速費6: String,
  下払スケール費6: String,
  下払スケール費課税6: Number,
  下払シャーシ留置費6: String,
  下払シャーシ留置費課税6: Number,
  下払その他費用6: String,
  下払その他課税6: Number,
  請求内容: String,
  配車日: Date,
  仮依頼書作成日: Date,
  依頼書作成日: Date,
  送り状受領書作成日: Date,
  mail作成日: Date,
  請求書作成日: Date,
  フォーム: String,
  備考: Number,
  配車シート名: String,
  配車シート記録X: Number,
  配車シート記録Y: Number,
});

module.exports = mongoose.model('User', userSchema);