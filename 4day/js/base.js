
$(function() {
	countDown();
});

function countDown() {
	var now = new Date();
	var time = new Date();
	var end = new Date("2020/12/31 00:00");
	var left = end - time;
	var a_day = 24 * 60 * 60 * 1000;
	var d = Math.floor(left / a_day)
	var h = Math.floor((left % a_day) / (60 * 60 * 1000))
	var m = Math.floor((left % a_day) / (60 * 1000)) % 60
	var s = Math.floor((left % a_day) / 1000) % 60 % 60

	$("#day").text(d);
	$("#hour").text(h);
	$("#min").text(m);
	$("#sec").text(s);
	setTimeout('countDown()', 1000);
}

// 非表示時間
// $(document).ready(function() {
// 	var now = new Date();
// 	var between03 = new Date("2020/04/15 00:00");
// 	if (now.getTime() > between03.getTime()) {
// 		$('.t_box').hide();
// 	}
// });











$(function() {

	tog = {

		init : function() {
			this.toggleAction();
		},

		// toggle アクション
		toggleAction :function(){
			$('.m_n').hide();

			$('.m_t').click(function(){
				$(this).next('.m_n').slideToggle();

				if($(this).hasClass('active')) {
					$(this).removeClass("active");
				}
				else {
					$(this).addClass("active");
				}
			});
			$('.release').click(function(){
				$(this).css('background','#ce8d79');
				$(this).text('全モジュールの表示 済み');
				$(".m_n").css('display','block');
			});
		}
	}

	tog.init();
});



$(window).bind("load", function(){
	$('.scrollTo').click(function() {
		var speed = 300; // ミリ秒
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'linear');
		return false;
	});
});
$(function(){
  $('.btnHamburger').on('click', function(){
	$(this).toggleClass('is-active');
	$(this).next('.module_num').fadeToggle();
	return false;
  });
});



$(function(){
    $(window).scroll(function (){
        $('.m_t').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 50){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });
});