$(function(){

	$('#tweet-controls').hide();

	$('.tweet-compose').on('click', function() {
		$(this).addClass('expand');
		$('#tweet-controls').show();
	});

	$('.tweet-compose').on('keyup', function() {
		var length = $(this).val().length;
		var count = 140 - length;
		$('#char-count').text(count);
		if(count <= 10)
		{
			$('#char-count').css('color', 'red');
		}
		else
		{
			$('#char-count').css('color', '#999');
		}

		if(length > 140) 
		{
			$('#tweet-submit').attr('disabled', true);
		}
		else
		{
			$('#tweet-submit').removeAttr('disabled');
		}
	});

	$('#tweet-submit').on('click', function() {
		var length = $('.tweet-compose').val().length;
		var profile = $('#profile-summary').clone();
		var content = $('.tweet-compose');
		if(length === 0)
		{
			alert("You can't submit an empty tweet!");
		}
		else
		{
			$('#stream').prepend(profile, content.val());
		}
	});
});
