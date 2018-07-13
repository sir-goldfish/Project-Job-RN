/*** Created by Wei.yb on 2017/05. ***/
// tab切换方法
function switchTab($dom, handle) {
    var $tabNav = $dom.find('.tab-nav'),
        $tabContent = $dom.find('.tab-content'),
        $naves = $tabNav.find('.nav-item'),
        $contents = $tabContent.find('.content-item');
    $naves.on(handle, function () {
        if (!$(this).hasClass('current')) {
            var currentIndex = $(this).index();
            if ($tabNav.find('.current').length > 0) {
                $tabNav.find('.current').removeClass('current');
            }
            $(this).addClass('current');
            if ($tabContent.find('.current').length > 0) {
                $tabContent.find('.current').removeClass('current');
            }
            $contents.eq(currentIndex).addClass('current');
        }
    });
}
