//<!--加入 jQuary淡入語法-->
$(function () {
    $("main").hide();
    $("main").fadeIn(2000);
});

    //<!--加入 jQuary tabs語法-->
$(function () {
    $("#tabs").tabs();
});

// 直接點方塊 (part II-修改-第4顆按鈕)
$('img').on('click', function () {
    // console.log(this);
    $(this).addClass('animate__animated animate__swing');
});
$('img').on('animationend', function () {
    // console.log('搖完了');
    $(this).removeClass('animate__animated animate__swing');
});

// 直接點方塊 (part II-修改-第4顆按鈕)
$('#tabs a').on('click', function () {
    // console.log(this);
    $(this).addClass('animate__animated animate__swing');
});
$('#tabs a').on('animationend', function () {
    // console.log('搖完了');
    $(this).removeClass('animate__animated animate__swing');
});

// 直接點方塊 (part II-修改-第4顆按鈕)
$('h3').addClass('animate__animated animate__zoomInUp');
/* $('h3').removeClass('animate__animated animate__zoomInUp'); */
$('h2').addClass('animate__animated animate__rollIn');