/*eslint-disable*/
new WOW().init();

var $aboutBlockOffset = $('.about').offset().top;
var $setActiveToPencilBlock = false;
var $pencilBlock = $('.pencil-block');

$(window).on('scroll', function () {
    var $scrollWindow = $(this).scrollTop();
    if(!$setActiveToPencilBlock){
        if ($scrollWindow >= ($aboutBlockOffset - 200)) {
            $pencilBlock.addClass('active');
            $setActiveToPencilBlock = true;
        }
    }
});
/*eslint-enable*/
