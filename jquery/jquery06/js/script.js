$(function(){
    // 一旦全てのスライド内容を非表示にする
    $('.slide-content').hide();
    
    $('.slide').click(function() {
        // 一旦開いているスライド内容を閉じる
        $('.slide-content').slideUp();

        // クリックした次の要素のスライドを開く
        $(this).next().slideDown();
    });
});