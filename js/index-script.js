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


$(document).ready(function(){       	
	
	
	var imgs='';// 변수 imgs에 따옴표만 넣어 빈 문자열을 생성합니다.
	
	// for문을 이용하여 변수 i를 0부터 199까지 증가시킵니다.
	for(var i=0; i<9; i++){	//반복문 (200= 이미지 갯수)

		
		imgs+="<img src='img/pic"+i+".png' />"	// 변수 imgs에 대입연산자를 이용하여 다음의 태그를 계속해서 200개가 될때까지 추가합니다.	
	};
	
	// .html() 구문에 조금 전 태그를 반복하며 생성해둔 변수 imgs를 넣어 다시 section 영역안에 추가합니다.
	$("aticle").html(imgs);
	
	
	// 마우스 무브시 안쪽의 구문 실행
	$(".visual").on("mousemove",function(e){
	
		
		var wid = $(window).width();// 변수 wid에 현재 브라우저의 넓이값 저장
		var posX = e.pageX; // 변수 posX에 화면상에 마우스 커서의 위치 저장	
		
		// 변수 percent에 200까지의 백분율 수치 저장
		var percent = Math.floor((posX/wid)*9); 
		
		// // 해당 백분율 값을 h3에 출력
		$("h3").text(percent);	
		
		// 모든 img 태그를 숨김 처리
		$("aticle>img").hide();
		
		// 현재 마우스의 위치에 해당하는 이미지 순서만 보임 처리
		$("aticle>img").eq(percent).show();

	});	
	

});
