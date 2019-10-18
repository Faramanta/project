$(document).ready(function(){
    $('#menuOpen').click(function () {
        $('.header-menu__list-wrap').show();
        // $(this).hide();
    });

    $('#menuClose').click(function () {
        $('.header-menu__list-wrap').hide();
    });

    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    })
});
