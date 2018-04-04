/*** Created by Wei.yb on 2018/01. ***/
// 引流页右侧浮动咨询（基于jquery & smooth_scroll）
function setLandingFloatConsult($nav) {
    var $navItems = $nav.find('.lift-item'),
        $goTop = $nav.find('.lift-go-top'),
        winScrollT = $(window).scrollTop();
    if (winScrollT >= 300) {
        $goTop.addClass('on');
    } else {
        if ($goTop.hasClass('on') == true) {
            $goTop.removeClass('on');
        }
    }
    $(window).on('scroll', function () {
        winScrollT = $(window).scrollTop();
        if (winScrollT >= 300) {
            $goTop.addClass('on');
        } else {
            if ($goTop.hasClass('on') == true) {
                $goTop.removeClass('on');
            }
        }
    });
    $goTop.on('click', function () {
        $.smoothScroll({
            scrollTarget: $(window)
        });
    });
}

setLandingFloatConsult($('.m-landing-float-consult'));
