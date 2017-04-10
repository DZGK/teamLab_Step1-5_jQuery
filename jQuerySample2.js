//読み込み完了時に実行する関数を指定
$(loaded);

function loaded(){
  // セレクタで指定したbodyに新しく「おはよう」「こんにちは」「おやすみ」を追加
  $("body").append($("<p>").text("おはよう"));
  $("body").append($("<p>").text("こんにちは"));
  $("body").append($("<p>").text("おやすみ"));


  // id =message が削除される。
  $("#message").remove();

  //ボタンをクリックしたときの動作を指定
  $("button").click(change_text);
}

function change_text(){
  //ID が messageの要素を書き換え:   "$("#message").remove();" しているので、動作しない。
  $("#message").text("こんばんは");

}

// jQueryでは$関数を頻繁に使用します。
// $関数に関数を渡すとページの読み込みが終わったときにその関数が実行されます。
// また、$関数に文字列を渡すと該当のDOM要素を返します。これをセレクタといいます。
// セレクタの詳しい使い方についてはjQuery日本語リファレンスを参照してください。
