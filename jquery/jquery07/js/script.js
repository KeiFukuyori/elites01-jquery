$(function(){
    // サムネイルをクリックしたときの処理
    $("#thum a").click(function(){
        // サムネイルの画像のhref属性を取得してメイン画像のsrc属性に書き込む
        // $("#main img").attr("src",$(this).attr("href"));
        
        
        
        // サムネイルのクリックで取得したaタグのhref属性を元に
        // メイン画像の裏に新たにimg要素を追加
        $("#main img").before("<img src='"+$(this).attr("href")+"' alt=''>");
        
        // 元あったメイン画像をフェードアウトすることで、裏に追加した
        // img要素が徐々に表示される。フェードアウトが完了したら
        // その要素自体を削除する（コールバック）
        $("#main img:last").fadeOut("fast",function(){
           $(this).remove(); 
        });
        
        // サムネイルのaタグをクリックした際のデフォルトの挙動を無効にする
        return false;
    });
});