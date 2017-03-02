$(function(){
    // 一旦すべてのタブを非表示
    $('.tab-content').hide();
    
    // デフォルトで一つ目のタブを表示   
    $('#tab1').show();
    
    // クリック時のイベント処理($(this)についてはクリックした要素自身のことを表す
    $('.tab > li').click(function(){
       // 全てのタブを非アクティブ化
       $('.tab > li').removeClass('active');
       
       // (全ての)タブの内容を非表示にする
       $('.tab-content').hide();
       
       //  クリックしたタブをアクティブ化
       $(this).addClass('active');
       
       // 選択したタブの内容を取得
       // data()メソッドはHTMLのdata属性を取得する
       // ※htmlにてdata-xxx属性(ここではxxxにtargetを入れている）を使用しており、
       // xxxになっている部分を引数に渡すことで、一致するdata属性を取得することができる
       var target = $(this).data('target');
       
       // 対象のタブの内容を表示
       $('#' + target).show();
       
       // クリックした処理の最後に現在のthisの内容をconsoleに表示する
       // 例：jQueryタブを選択している場合、下記のような値になる
       // <li data-target="tab2" class="active">jQuery</li>
       $(console.log(this));
       
       // 疑問点：var targetについて、これはidとなっている？
       // '#' + targetで指定をしていたため
    });
});