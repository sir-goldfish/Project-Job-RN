/*** Created by Wei.yb on 2018/03. ***/
// tab切换方法
function switchTab($dom, handle) {
    var $tabNav = $dom.find('.tab-nav'),
        $tabContent = $dom.find('.tab-content'),
        $naves = $tabNav.find('.tab-nav-item'),
        $contents = $tabContent.find('.tab-content-item');
    $naves.on(handle, function () {
        if ($(this).hasClass('current') == false) {
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