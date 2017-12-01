
function edit(that) {
    var that = $(that);
    layer.open({
        'type' : 2,
        title : '个人信息修改',
        content : './showUser?userid=' + that.data('id'),
        area: ['500px', '600px']
    });
}