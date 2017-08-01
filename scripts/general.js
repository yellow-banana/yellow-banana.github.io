$(document).ready(function(){
	$('.button-service').click(function() {
		$('.button-service').removeClass('sel');
		$(this).addClass('sel');
		$('.section.pm').addClass('disabled');
		$('html,body').animate({
			scrollTop: $('.amountInput').offset().top},'slow');
	});
	
	$('#slct-bank').on('change', function(){
		$('.btn-channel').removeClass('pure-button-active');
		if($(this).val() != 'default'){
			console.log(($(this).val())); // DEBUG
			$('.button-service').removeClass('sel');
			$('.section.pm').removeClass('disabled');
			$('.btn-channel').prop('disabled', false);
			$('input[type="checkbox"]').prop('disabled', false);
			$('html,body').animate({
				scrollTop: $('.section.pm').offset().top},'slow');
		}else{
			$('.section.pm').addClass('disabled');
			$('.btn-channel').prop('disabled', true);
			$('input[type="checkbox"]').prop('disabled', true);
		}
	});
	
	$('.btn-channel').click(function() {
		$('.btn-channel').removeClass('pure-button-active');
		$(this).addClass('pure-button-active');
	});
	
});
