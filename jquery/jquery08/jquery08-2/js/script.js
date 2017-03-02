// 機能２のステップ２.オートプレイを実装
$(function(){
    
    // 変数定義
    //****************************************************************
    var $container = $('.slider'),                  // sliderクラス全体のコンテナ
    $slideGroup = $container.find('.slider-slides'),　// 全スライドのまとまり
    $slides = $slideGroup.find('.slide');           　　// 各スライド
   
    $nav = $container.find('.slider-nav');
    
    // $indicatorを追記
    $indicator = $container.find('.slider-indicator'),
    
    slideCount = $slides.length,    // スライドの点数
    currentIndex = 0,               // 現在のスライドのインデックス
    duration = 1000,                // 次のスライドのインデックス
    interval = 2000;                // 自動で次のスライドに移るままでの時間
    
    // indicatorHTMLを追記
    indicatorHTML='',            // インジケーターのコンテンツ
    
    // timerを定義                  // タイマーの入れ物
    timer='';
    
    //****************************************************************
    
    // HTML 要素の配置、生成、挿入
    //****************************************************************
    // 各スライドの位置を決定
    $slides.each(function(i){
        $(this).css({left: 100 * i + '%' });
        // 対応するインジケーターのアンカーを生成
        indicatorHTML += '<a href="#">' + (i + 1) + '</a>';
    });
    
    // インジケーターにコンテンツを挿入
    $indicator.html(indicatorHTML);
    
    // スライド画像クリック時のデフォルト挙動をキャンセル
    $slides.on('click',function(){
        return false;
    });
    
    //****************************************************************
    
    // 関数の定義
    //****************************************************************
    function goToSlide(index){
        // スライドグループをターゲットの位置に合わせて移動
        $slideGroup.animate({ left: -100 * index + '%' }, duration);
        
        // 現在のスライドのインデックスを上書き
        currentIndex = index;
        
        // ナビゲーションの状態を更新
        updateNav();
    }
    
    // スライドの状態に応じてナビゲーションを更新する関数
    function updateNav(){
        var $navPrev = $nav.find('.prev'), // Prev用リンク
            $navNext = $nav.find('.next'); // Next用リンク
        // もし最初のスライドならPrevナビゲーションを無効に
        if(currentIndex === 0){
            $navPrev.addClass('disabled');
        }
        else{
            $navPrev.removeClass('disabled');
        }
        // もし最後のスライドならNextナビゲーションを無効に
        if(currentIndex === slideCount -1){
            $navNext.addClass('disabled');
        }
        else{
            $navNext.removeClass('disabled');
        }
        
        // 現在のスライドのインジケーターを無効にする
        $indicator.find('a').removeClass('active').eq(currentIndex).addClass('active');
    }
    
    
    // タイマーを開始する関数
    function startTimer () {
        // 変数 interval で設定した時間が経過するごとに処理を実行
        timer = setInterval(function () {
            // 現在のスライドのインデックスに応じて次に表示するスライドの決定
            // もし最後のスライドなら最初のスライドへ
            var nextIndex = (currentIndex + 1) % slideCount;
            goToSlide(nextIndex);
        }, interval);
    }

    //****************************************************************
    
    // イベントの登録
    //****************************************************************
    // ナビゲーションのリンクがクリックされたら該当するスライドを表示
    $nav.on('click', 'a' , function(){
        if($(this).hasClass('prev')){
            goToSlide(currentIndex -1);
        }
        else
        {
            goToSlide(currentIndex + 1);
        }
        return false;
    });
    
    $indicator.on('click', 'a' , function(){
        if(!$(this).hasClass('active')){
            goToSlide($(this).index());
        }
        return false;
    });
    
    //****************************************************************
    
    // スライドショーの開始
    //****************************************************************
    
    // 最初のスライドショーの開始
    goToSlide(currentIndex);
    
    // タイマーをスタート
    startTimer();
});