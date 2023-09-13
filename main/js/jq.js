$(function () {
    // snsメニューのスタイル
    var timer = false;
    var prewidth = $(window).width()
    $(window).resize(function() {
        if (timer !== false) {
            clearTimeout(timer);
        };
        timer = setTimeout(function() {
            var nowWidth = $(window).width()
            if(prewidth !== nowWidth){
                location.reload();
            };
            prewidth = nowWidth;
        }, 200);
    });
    
    
    

    
    // モバイメニュー用
    $("#mobile_hdr").click(function () { 
        if ($(this).hasClass("open")) {
            $(this).removeClass("open");
            $(this).addClass("close");
            $("#mobile_menu").hide();
        }
        else {
            $(this).removeClass("close");
            $(this).addClass("open");
            $("#mobile_menu").show();
        }
    });
    // スムーズスクロールを追加
    $(".toTop").click(function() {
        // スクロール
        $('html,body').animate({scrollTop: 0}, 500, 'swing');
    });

    var headerHeight = $('header').outerHeight()+10;
    var urlHash = location.hash;
    if(urlHash) {
        $('body,html').stop().scrollTop(0);
        setTimeout(function(){
        var target = $(urlHash);
        var position = target.offset().top - headerHeight;
        $('body,html').stop().animate({scrollTop:position}, 500);
        }, 100);
    }
    $('#contents a').click(function(){
        var href= $(this).attr("href");
        var target = $(href);
        var position = target.offset().top - headerHeight;
        $('body,html').stop().animate({ scrollTop: position }, 500);
        return false;
    });
    
});
