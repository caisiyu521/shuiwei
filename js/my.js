$(function() {
    // 被卷去的头部 scrollTop()  / 被卷去的左侧 scrollLeft()
    // 页面滚动事件

    // var boxtop = $('.company-info').offset().top;
    $(window).scroll(function() {
        // console.log($(document).scrollTop());
        if ($(document).scrollTop() >= 50) {
            $('.back').fadeIn();
        } else {
            $('.back').fadeOut();
        }
    });
    // 返回顶部
    $('.back').click(function() {
        $('body,html').stop().animate({
            scrollTop: 0
        }, 1000);
    });
})