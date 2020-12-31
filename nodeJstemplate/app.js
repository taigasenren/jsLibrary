//expressの読み込み
const express = require('express');

//expressを使用するための準備
const app = express();

//urlで"/"にリクエストが来た時に処理を実行することをルーティングという
//リクエストを送ってレスポンスが返ってくる
app.get('/', (req, res) => {
  //res.renderとすることで指定したビューファイルをブラウザに表示できる
  res.render('hello.ejs');
});

//publicフォルダ内のファイルを読み込めるようにする
app.use(express.static("public"));

//localhost:3000でアクセス可能なサーバーを起動する
app.listen(3000);