/*eslint-disable*/
$(document).ready(function(){
    var wow = new WOW();

    var $aboutBlock = $('.about');
    var $aboutBlockOffset = $aboutBlock.length ? $aboutBlock.offset().top : 0;
    var $setActiveToPencilBlock = false;
    var $pencilBlock = $('.pencil');
    var $wowInit = false;

    goWow();
    drawPencil();
    $(window).on('scroll', drawPencil);
    $(window).on('resize', goWow);

    function drawPencil(){
        var $scrollWindow = $(window).scrollTop();
        if(!$setActiveToPencilBlock){
            if ($scrollWindow >= ($aboutBlockOffset - 450)) {
                $pencilBlock.addClass('active');
                $setActiveToPencilBlock = true;
            }
        }
    }

    function goWow() {
        var $windowWidth = $(window).width();
        if($windowWidth > 780 && !$wowInit){
            wow.init();
            $wowInit = !$wowInit;
        } else if($windowWidth <= 780 && $wowInit){
            wow.disabled();
            $wowInit = !$wowInit;
        }
    }
});


/*eslint-enable*/
