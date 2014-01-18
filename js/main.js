$(function(){


	/**	TOOLTIPS SECTION**/

		$('.avatar').attr('data-toggle','tooltip');
		$('.avatar').tooltip({
			placement: 'left',
			title: function() {
				return "" + $('.tweet').find('.fullname').text() + "";
			}
		});

	/** HIDE TWEET CONTROLS **/
	$('#tweet-controls').hide();
	$('#tweet-submit').attr('disabled', true);


	/** EXPAND TWEET COMPOSE **/
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

		if(length > 140 || length === 0) 
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
		var content = $('.tweet-compose').val();
		var myName = $('#profile-summary > .content > .fullname').text();
		var myUser = $('#profile-summary > .content > .username').text();
		var tweet = $('.tweet-text');
		var fullName = $('.fullname');
		var userName = $('.username');

	
		var newTweet = $('.tweet').eq(0).clone();

		newTweet.find('.avatar').attr('src','img/alagoon.jpg');
		newTweet.find('.fullname').text(myName);
		newTweet.find('.username').text(myUser);
		newTweet.find('.tweet-text').text(content);

		newTweet.prependTo('#stream');

		$('.tweet-compose').val("");
		$('.tweet-compose').removeClass('expand');

	});

	$('.tweet').on('click', function() {
		$(this).find('.stats').animate({
			height: 'toggle'
		}, 500);
		$(this).find('.reply').show();
	});

	$('.time').timeago();
});
