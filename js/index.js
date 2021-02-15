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
    responsive: [{
        breakpoint: 1025,
        settings: {
            arrows: false,
        }
    }]
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

// 여기서부터 resize 이벤트 발생시 스크롤바 유무에 따라 상태(화면너비)제어 프로그램
var deviceSize = 1024;
function scrollOX(status) {
    $('html').css({ overflowY:status })
    var htmlWidth = $('html').width();
    return htmlWidth
}
var swh = scrollOX('hidden');
var sws = scrollOX('scroll');
var swd = swh - sws;
if ( swd > 0 ) {
    deviceSize = deviceSize - swd;
}

// 함수 선언
function calc_width(){
    var ww = $(window).width();
    if ( ww > deviceSize ) {
        $('html').addClass('pc').removeClass('mobile')
        $('.search #sbox').removeClass('on')
        $('.depth1 > li').removeClass('on')
        $('#header .nh button').find('i').removeClass('fa-times').addClass('fa-bars')
    } else if ( ww <= deviceSize && !$('html').hasClass('mobile') ){
        $('html').addClass('mobile').removeClass('pc')
        $('#nav').removeClass('on')
        $('.search #sbox').removeClass('on')
    }
}


calc_width();
$(window).on('resize', function(){ calc_width(); })

$('.depth1 > li').hover(
    function(){
        if ( $('html').hasClass('pc') ) {
            $(this).addClass('on')
        }
    },
    function(){
        if ( $('html').hasClass('pc') ) {
            $(this).removeClass('on')
        }
    }
)
$('.depth1 > li').on('click',
    function(e){
        if ( $('html').hasClass('mobile') ) {
            e.preventDefault();
            $(this).toggleClass('on').siblings().removeClass('on')
        }
    }
)
$('.depth2 > li').on('click',function(e){
    e.stopPropagation();
})


// 돋보기 클릭시 검색창 박스 여닫기
$('.search label').on('click', function(){
    $(this).prev().toggleClass('on')
})

$(window).on('scroll', function(){
    var sct = $(this).scrollTop();
    if ( sct>=1 && !$('#header').hasClass('on') ) {
        $('#header').addClass('on')
    } else if ( sct< 1 && $('#header').hasClass('on') ) {
        $('#header').removeClass('on')
    }
})