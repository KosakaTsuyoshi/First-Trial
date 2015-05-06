$(function() {
	var pos1 = $('#box1').offset();
	var pos2 = $('#box2').offset();
	var pos3 = $('#box3').offset();
	var pos4 = $('#box4').offset();
	$(window).scroll(function() {
		var value = $(this).scrollTop();
		$('#scrollValue').text(value);

		$('#box1').css('top', pos1.top + value / 2);
		$('#box1').css('left', pos1.left + value / 8);

		$('#box2').css('top', pos2.top + value / 4);
		$('#box2').css('left', pos2.left + value / 6);

		$('#box3').css('top', pos3.top + value / 6);
		$('#box3').css('left', pos3.left + value / 4);

		$('#box4').css('top', pos4.top + value / 8);
		$('#box4').css('left', pos4.left + value / 2);
	});
});