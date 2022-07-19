$(document).ready(function(){
    
    //원스크롤
    var size = $('#contents>div').size();//몇개야?
	$('#contents>div').on('mousewheel',function(event,delta){ //델타에 -1 또는 1이들어옴(마우스지 위 아래 감지)
		if(delta>0 && $(this).index()>=1){
			var prev = $(this).prev().offset().top;
			$('html,body').stop().animate({'scrollTop':prev},1500,'easeOutExpo');
		}else if(delta<0 && $(this).index()<=(size-2)){
			var next = $(this).next().offset().top;
			$('html,body').stop().animate({'scrollTop':next},1500,'easeOutExpo');
		}
	});   
    
    //타이핑 제이쿼리	
	$('.thanks_text').each(function(){
		var items = $(this).attr('title')+';'+$(this).text();
		$(this).empty().attr('title','').teletype({
			text: $.map(items.split(';'),$.trim),
			typeDelay: 70,
			backDelay: 10,
			cursor: '|',
			delay: 1000,
			preserve: false,
			prefix: '',
			loop: 0
		});
	});
    
    var mySlider = $('.works_contents_wrap').bxSlider({
		mode:'horizontal', // 수평방향으로 이동
		speed:200, //이동속도
		pager:false, //페이지 표시 노출 안함
		moveSlides: 1, // 한 개씩 이동
		slideWidth: 350, // 한개 슬라이드 폭
		minSlides:5, // 최소 노출 슬라이드 갯수
		maxSlides:5, // 최대 노출 슬라이드 갯수
		slideMargin: 360, // 슬라이드 마진 간격
		auto:true, // 자동 슬라이드 여부
		autoHover:true, //마우스 오버시 자동 정지z
		controls: false // 이전 다음 버튼을 숨김(아래 함수로 따로 코딩할 것임)
	});
    
    
    $('.prev_btn').on('click',function(){
		mySlider.goToPrevSlide();
		return false;
	});
	$('.next_btn').on('click',function(){
		mySlider.goToNextSlide();
		return false;
	});
    
});









