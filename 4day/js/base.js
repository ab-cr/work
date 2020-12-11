
$(function() {
	countDown();
});

function countDown() {
	var now = new Date();
	var time = new Date();
	var end = new Date("2020/12/31 23:59");
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

	$(".block-type--html iframe").ss({'cssText': 'height: auto !important;'});
}

// 非表示時間
// $(document).ready(function() {
// 	var now = new Date();
// 	var between03 = new Date("2020/04/15 00:00");
// 	if (now.getTime() > between03.getTime()) {
// 		$('.t_box').hide();
// 	}
// });









