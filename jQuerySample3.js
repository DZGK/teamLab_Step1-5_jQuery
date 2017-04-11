//読み込み完了時に実行する関数を指定
$(loaded);

function loaded(){
  //配列を定義
  var messages = ["おはよう", "こんにちは", "こんばんは", "おやすみ"];

  //配列をループで読み込んで表示
  $.each(messages, function(index, value) {
    $("body").append($("<p>").text(value));
  });

  //console.log() の出力先はブラウザの開発ツールのコンソールである。
  $("p").each(function(index, value) {
    console.log($(value).text());
  });

  //ボタンをクリックしたときの動作を指定
  $("button").click(change_text);
}

function change_text(){
  // "p" を "へんかーん" へ変換する。
    $("p").text("へんかーん");
}
