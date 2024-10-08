'use strict';

// a 클릭했을때 위로 튕기는 이벤트제거
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});


//fixHeader
var scrollNum = 0;
scrollNum = $(document).scrollTop();
fixHeader();

//고정헤더 함수
function fixHeader() {
    if (scrollNum > 150) { 
        $('header').addClass('on');
    } else {
        $('header').removeClass('on');
    }
}

//상단이동 부드럽게
$(function() {            
    $('.goTop').on('click', function() {
        var top = $('body').offset().top;
        $('html, body').animate( { scrollTop : (top) }, 400 );  
    });    
});  



//윈도우창 조절시 이벤트
$(window).on('scroll resize', function() {
    scrollNum = $(document).scrollTop();
    fixHeader();
});



//.gnb
$(function(){
    $('.innerHeader .menu').on('click', function(){
        $('.menuOpen').addClass('on');
    });
    $('.menuOpen .close,section').on('click', function(){
        $('.menuOpen').removeClass('on');
    });
});

//Splitting
$(function(){
    Splitting();
});  


//3. 스크롤 애니메이션
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
}); 


//--------------------------------------------------------------------------------------
$(window).ready(function(){
    draw(80, '.pie-chart1', '#B09582');
    draw(90, '.pie-chart2', '#B09582');
    draw(70, '.pie-chart3', '#B09582');
    draw(85, '.pie-chart4', '#B09582');
    draw(80, '.pie-chart5', '#947C6B');
    draw(85, '.pie-chart6', '#947C6B');
    draw(65, '.pie-chart7', '#947C6B');
    draw(60, '.pie-chart8', '#947C6B');
});

function draw(max, classname, colorname){
    var i=1;
    var func1 = setInterval(function(){
    if(i<max){
        color1(i,classname,colorname);
        i++;
} else{
        clearInterval(func1);
    }
    },10);
}
function color1(i, classname,colorname){
    $(classname).css({
        "background":"conic-gradient("+colorname+" 0% "+i+"%, #eeeeee "+i+"% 100%)"
    });
}

















// .ncs 이미지슬라이드
$(function() {
    $(".slide").slick({
        arrows: true, //화살표
        dots: false, //인디케이터 해제
        autoplay: false, //자동재생
        autoplaySpeed: 4000, //재생시간
        pauseOnHover:false, //마우스 오버, 포커스시 멈추는것 해제
        pauseOnFocus:false,
        slidesToShow: 2,
        slidesToScroll: 2
    });
}); 





