(function () {
    $('#tab tr:even:gt(0)').addClass('tr_even');    //默认偶数行背景色，无视标题行用:gt(0)
    $('#tab tr:odd').addClass('tr_odd');            //默认奇数数行背景色
    $('tr:gt(0)').live("mouseover", function () {
        $(this).addClass('tr_hover');           //通过jQuery控制实现鼠标悬停上的背景色，无视标题行用:gt(0)
    }).live("mouseout", function () {
        $(this).removeClass('tr_hover');       //通过jQuery控制实现鼠标悬停上的背景色
    });
})()