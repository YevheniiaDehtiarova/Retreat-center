

$('.news__slider').slick({
    prevArrow: '<img src="src/assets/img/arrow-left.svg"  class="prev" alt="Left Arrow">',
    nextArrow: '<img src="src/assets/img/arrow-right.svg" class="next" alt="Right Arrow">',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '10px',
    responsive: [{
        breakpoint: 821,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
        }
    }]
});


$('.volunteering__slider').slick({
    prevArrow: '<img src="src/assets/img/arrow-left.svg"  class="prev" alt="Left Arrow">',
    nextArrow: '<img src="src/assets/img/arrow-right.svg" class="next" alt="Right Arrow">',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 821,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
        }
    }]
});


$(window).on('resize', function() {
    $('.news__slider').slick('setPosition');
});
$(window).on('resize', function() {
    $('.volunteering__slider').slick('setPosition');
});