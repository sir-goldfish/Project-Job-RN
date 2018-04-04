/*** Created by Wei.yb on 2017/05. ***/
//自定义单多选框(.u-custom-check)操作
function setCheck() {
    $('.u-custom-check').each(function () {
        if ($(this).find('input').prop('checked')) {
            $(this).addClass('u-custom-check-checked');
        } else {
            if ($(this).hasClass('u-custom-check-checked')) {
                $(this).removeClass('u-custom-check-checked');
            }
        }
    });
    $('.u-custom-check').find('input').on('change', function () {
        if ($(this).prop('checked')) {
            $(this).parent('.u-custom-check').addClass('u-custom-check-checked');
        } else {
            if ($(this).parent('.u-custom-check').hasClass('u-custom-check-checked')) {
                $(this).parent('.u-custom-check').removeClass('u-custom-check-checked');
            }
        }
    });
}
setCheck();