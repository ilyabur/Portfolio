console.log("Привет, скрипт подключен!")

$(function() {
 let header = $('.header_menu');
 let hederHeight = header.height(); // вычисляем высоту шапки


 $(window).scroll(function() {
   if($(this).scrollTop() > 1) {
    header.addClass('header_fixed');
    $('.header_menu').css({
        background": "white"
    });
   } else {
    header.removeClass('header_fixed');
    $('.header_menu').css({
     'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
    })
   }
 });
});
