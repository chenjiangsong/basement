// 页面适配
function windowResize() {
    var size = $(window).width();
    if (pageConfig.limitWidth === false) {
        $('html').css('font-size', size / 3.2);
        $('body').removeClass('iwjw-max');
        return false;
    }
    if (size < 640) {
        $('html').css('font-size', size / 3.2);
        $('body').removeClass('iwjw-max');
    } else {
        $('html').css('font-size', 640 / 3.2);
        $('body').addClass('iwjw-max');
    }
}

if (width > 640) {
    setTimeout(function() { //红米node
        windowResize();
    }, 200);
} else {
    windowResize();
}

$(window).resize(function() {
    windowResize();
});
