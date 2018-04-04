function show(element, name) {
    var $self = $(element),
        list = name,
        initHtml = $self.html(),
        $input = '',
        appendHtml = '<input type="text">';
    // 判断input是否存在
    if ($self.find('input').length <= 0) {
        $self.html(appendHtml);
    }
    $input = $self.find('input');
    // 阻止双击input触发父级
    $input.on('dblclick', function (event) {
        event.stopPropagation();
    });
    $input.focus();
    $input.val(initHtml);
    $input.attr('maxlength', 5);
    $input.keyup(function () {
        $(this).val($(this).val().replace(/(^0|[^\d])/g, ''));
    });
    $input.keydown(function () {
        $(this).val($(this).val().replace(/(^0|[^\d])/g, ''));
    });
    var newArr = [],
        flag = false;
    $input.on('blur', function () {
        $('.number').each(function (i) {
            newArr[i] = $('.number').eq(i).text();
        });
        for (var i = 0; i < newArr.length; i++) {
            if (newArr[i] == $(this).val() && newArr[i] != 0 && list == 'number') {
                alert('该编号已存在');
                flag = true;
                break;
            }
        }
        if ($(this).val !== initHtml) {
            var val = $(this).val(),
                id = $self.parent().attr('data_id');
            $self.html(val);
            // 判断是否满足发送ajax的条件
            if (flag == false) {
                $.ajax({
                    url: '/property_minfo/edit_admin',
                    data: {id: id, list: list, value: val},
                    type: 'post',
                    success: function (res) {
                        if (res.code == 200) {
                        } else {
                            alert(res.data.erorr_message);
                            location.reload();
                        }
                    }
                });
            } else {
                location.reload();
            }
        } else {
            $self.html(initHtml);
        }
    });
}
