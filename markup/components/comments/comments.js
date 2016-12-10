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
    var $endCount = $countStudents.length ? parseInt($countStudents.data('end-count')): 0;


    var $countStudentsOffset = $countStudents.length ? $countStudents.offset().top : 0;
    var $activeCountStudents = false;
    var numAnim = $countStudents.length ? new CountUp("js-students", 0, $endCount, 0, 5) : null;


    goCounterStudent();
    $(window).on('scroll', goCounterStudent);
    function goCounterStudent() {
        var $scrollWindow = $(window).scrollTop();
        if(!$activeCountStudents){
            if ($scrollWindow > ($countStudentsOffset - 950)) {
                if($endCount !== 0){
                    numAnim.start();
                    $activeCountStudents = true;
                }
            }
        }

    }
});


/*eslint-enable*/
