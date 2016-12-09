/*eslint-disable*/
$(document).ready(function () {
    var $slickSlider = $('.list-comments__container');
    var $sliderOptions = {
        arrows: false,
        dots: true,
        dotsClass: 'list-comments__dots',
        infinite: true,
        vertical: true,
        verticalSwiping: true
    };
    $slickSlider.slick($sliderOptions);

    var $countStudents = $('#js-students');
    var $endCount = parseInt($countStudents.data('end-count'));


    var $countStudentsOffset = $countStudents ? $countStudents.offset().top : 0;
    var $activeCountStudents = false;
    var numAnim = new CountUp("js-students", 0, $endCount, 0, 5);


    goCounterStudent();
    $(window).on('scroll', goCounterStudent);
    function goCounterStudent() {
        var $scrollWindow = $(window).scrollTop();
        if(!$activeCountStudents){
            if ($scrollWindow > ($countStudentsOffset - 950)) {
                numAnim.start();
                $activeCountStudents = true;
            }
        }

    }
});


/*eslint-enable*/
