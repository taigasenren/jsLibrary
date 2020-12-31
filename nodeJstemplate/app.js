//expressの読み込み
const express = require('express');

//expressを使用するための準備
const app = express();

//publicフォルダ内のファイルを読み込めるようにする
app.use(express.static("public"));

//フォームの値を受け取るために必要な定型文
app.use(express.urlencoded({extended: false}));

const mysql = require("mysql");

//接続情報を定数connectionに代入する
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'progate',
  password: 'password',
  database: 'list_app'
});

//urlで"/"にリクエストが来た時に処理を実行することをルーティングという
//リクエストを送ってレスポンスが返ってくる
app.get('/', (req, res) => {
  //res.renderとすることで指定したビューファイルをブラウザに表示できる
  res.render('hello.ejs');
});



//localhost:3000でアクセス可能なサーバーを起動する
app.listen(3000);