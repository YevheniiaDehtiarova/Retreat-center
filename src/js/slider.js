

$('.anticipation__slider').slick({
    prevArrow: '<img src="src/assets/img/slider-arrow-left.png"  class="prev" alt="Left Arrow">',
    nextArrow: '<img src="src/assets/img/slider-arrow-right.png" class="next" alt="Right Arrow">',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
});





$(window).on('resize', function() {
    $('.anticipation__slider').slick('setPosition');
});
;