$(document).ready(function(){
	$('#slct-bank').on('change', function(){
		$('.payment-method').hide();
		if ($(this).val() == 'default'){
			console.log(($(this).val())); // DEBUG
			$('.payment-method').show();
		}else {
			$('#pm-ibanking').show();
		}
	});
});