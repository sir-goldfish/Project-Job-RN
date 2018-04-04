/*** Created by Wei.yb on 2017/10. ***/
//背景滑块导航效果
function setSlideNav(handle, $dom) {
    var $slideBtn = $dom.find('.slide-btn'),
        $navList = $dom.find('.nav-list'),
        $navItems = $navList.find('.nav-item'),
        $currentItem = $navList.find('.nav-item.current'),
        btnLeft = 0,
        btnWidth = 100;

    function setBtn() {
        $currentItem = $navList.find('.nav-item.current');
        btnLeft = $currentItem.position().left + parseFloat($currentItem.css('marginLeft'));
        btnWidth = $currentItem.outerWidth();
        $slideBtn.css({
            'left': btnLeft + 'px',
            'width': btnWidth + 'px'
        });
    }

    setBtn();
    $navItems.on(handle, function () {
        $(this).addClass('current').siblings().removeClass('current');
        setBtn();
    });
}