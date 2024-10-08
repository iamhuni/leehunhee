'use strict';

// a 클릭했을때 위로 튕기는 이벤트제거
$(document).on('click', 'a[href="#"]', function (e) {
    e.preventDefault();
});



//fixHeader
var scrollNum = 0;
scrollNum = $(document).scrollTop();
fixHeader();

//윈도우창 조절시 이벤트
$(window).on('scroll resize', function() {
    scrollNum = $(document).scrollTop();
    fixHeader();
});

//고정헤더 함수
function fixHeader() {
    if (scrollNum > 700) { 
        $('header').addClass('on');
    } else {
        $('header').removeClass('on');
    }
}

//상단이동 부드럽게
$(function () {
    $('.goTop').on('click', function () {
        var top = $('body').offset().top;
        $('html, body').animate({
            scrollTop: (top)
        }, 400);
    });
});

$(function(){
    if ($(this).scrollTop()> 200 ) {
        $('.goTop').fadeIn(200);
    }else {
        $('goTop').fadeOut(200);
    }
    
})




//.gnb
$(function () {
    $('.innerHeader .menu').on('click', function () {
        $('.menuOpen').addClass('on');
    });
    $('.menuOpen .close,section').on('click', function () {
        $('.menuOpen').removeClass('on');
    });
});

//Splitting
$(function () {
    Splitting();
});


//스크롤 애니메이션
$(function () {
    $('.animate').scrolla({
        mobile: true, //모바일버전시 활성화
        once: false //스크롤시 딱 한번만 하고싶을땐 true
    });
});

