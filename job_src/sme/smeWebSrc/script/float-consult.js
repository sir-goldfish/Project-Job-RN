/*** Created by Wei.yb on 2017/07. ***/
//右侧浮动咨询（基于jquery & smooth_scroll）
function setFloatConsult($dom, beginPoint) {
    var $contentItems = $dom.find('.content-item'),
        winW = $(window).width(),
        winH = $(window).height(),
        winScrollT = $(window).scrollTop(),
        $backTop = $dom.find('.back-top-btn'),
        domW = $dom.width(),
        domH = $dom.height(),
        domMarginT = -(domH / 2),
        domR;
    //监测尺寸变化，设置right
    $(window).resize(function () {
        winW = $(window).width();
        winH = $(window).height();
        setRight();
    });
    //设置位置
    function setRight() {
        if ((winW - 1200) / 2 >= domW + 34) {
            domR = (winW - 1200) / 2 - (domW + 34);
        } else {
            domR = 0;
        }
        $dom.css('right', domR + 'px');
    }

    setRight();
    $dom.css('margin-top', domMarginT + 'px');

    //展示返回顶部
    $(window).scroll(function () {
        winScrollT = $(window).scrollTop();
        if (winScrollT >= beginPoint) {
            $backTop.fadeIn();
        }
        if (winScrollT < beginPoint) {
            $backTop.fadeOut();
        }
    });
    //点击跳转
    $backTop.on('click', function () {
        $.smoothScroll({
            scrollTarget: $(window)
        });
    });
}
setFloatConsult($('.m-default-float-consult'), 100);
