/*eslint-disable*/


$(document).ready(function(){
    var wow = new WOW();

    var $aboutBlock = $('.about');
    var $aboutBlockOffset = $aboutBlock ? $aboutBlock.offset().top : 0;
    var $setActiveToPencilBlock = false;
    var $pencilBlock = $('.pencil-block');
    var $wowInit = false;
    var $windowWidth = $(window).width();

    if($windowWidth > 780 && !$wowInit){
        wow.init();
    }


    $(window).on('resize', function(){
        var $windowWidth = $(this).width();
        if($windowWidth > 780 && !$wowInit){
            wow.init();
        } else if($windowWidth <= 780 && $wowInit){
            wow.disabled();
        }
    });

    $(window).on('scroll', function () {
        var $scrollWindow = $(this).scrollTop();
        if(!$setActiveToPencilBlock){
            if ($scrollWindow >= ($aboutBlockOffset - 200)) {
                $pencilBlock.addClass('active');
                $setActiveToPencilBlock = true;
            }
        }
    });
});


/*eslint-enable*/
