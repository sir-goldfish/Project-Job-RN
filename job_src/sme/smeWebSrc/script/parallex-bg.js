/*** Created by Wei.yb on 2017/06. ***/
//视差背景效果
function parallexBg($doms) {
    var winScrollT = $(window).scrollTop(),
        minNum = 0,
        maxNum = 0;
    $doms.each(function (i, ele) {
        if ($(this).offset().top < $(window).height()) {
            $(this).css('background-position-y', -$(this).offset().top + 'px');
        }
    });
    $(window).on('scroll', function () {
        winScrollT = $(window).scrollTop();
        $doms.each(function (i, ele) {
            if ($(this).offset().top < $(window).height()) {
                minNum = 0;
            } else {
                minNum = $(this).offset().top - $(window).height();
            }
            maxNum = $(this).offset().top + $(this).innerHeight();
            if (winScrollT >= minNum && winScrollT <= maxNum) {
                $(this).css('background-position-y', winScrollT - $(this).offset().top + 'px');
            }
        });
    });
}