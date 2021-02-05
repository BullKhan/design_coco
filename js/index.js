$('#header .nh button').on('click',function(){
    var $ibtn = $(this).find('i');
    if( $ibtn.hasClass('fa-bars') ){
        $ibtn.removeClass('fa-bars').addClass('fa-times');
        $(this).next().addClass('on')
    } else {
        $ibtn.removeClass('fa-times').addClass('fa-bars');
        $(this).next().removeClass('on')
    }
})

$(".slide_group").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간[단위:ms]
    dots: true, // 번호 버튼 나타낼 여부
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
})

$('.article1 .plpa').on('click', function(){
    var $ibutton = $(this).find('i');
    if($ibutton.hasClass('fa-pause')) {
        $('.slide_group').slick('slickPause');
        $ibutton.removeClass('fa-pause').addClass('fa-play')
    }
    else {
        $('.slide_group').slick('slickPlay');
        $ibutton.removeClass('fa-play').addClass('fa-pause')
    }
})

$('.article5 .tabmenu > li').on('click', function(){
    $(this).addClass('active')
    .siblings().removeClass('active')
    //console.log($(this).index())
    //$('.cs_board .contents > div').eq($(this).index()).addClass('active')
    //$(this).parent().next().children().eq($(this).index()).addClass('active')
    var num = $(this).index()
    $(this).parent().next().children().eq(num).addClass('active')
    .siblings().removeClass('active')
})


var ww = $(window).width();
console.log(ww)
if ( ww > 1024 ) {
    $('#nav .depth1 > li').hover(
        function(){ $(this).addClass('on') },
        function(){ $(this).removeClass('on') }
    )
} else {
    $('#nav .depth1 > li').on('click',function(){
        if ( $(this).hasClass('on') ) {
            $(this).removeClass('on')
        } else {
            $(this).addClass('on').siblings().removeClass('on')
        }
    })
}