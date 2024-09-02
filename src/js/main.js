(function() {
    const tabs = document.querySelectorAll('.tab');
    const slides = document.querySelectorAll('.anticipation__slider .slick-slide');

    console.log(slides);

    let activeSlide = 0;

    function changeSlide(index) {
  

        console.log(index,slides[index])

        slides[index].classList.add('active');
        tabs[index].classList.add('active');

        activeSlide = index;
    }


    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            changeSlide(index);
    
        });
    });

    changeSlide(0);
})();
