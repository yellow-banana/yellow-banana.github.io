$(document).ready(function(){
	$('#slct-bank').on('change', function(){
		$('.payment-method').hide();
		if($(this).val() == 'ABC'){
			console.log(($(this).val())); // DEBUG
			$('#pm-mobile').toggle('slow', 'linear');
			$('#pm-ibanking').toggle('slow', 'linear');
			$('#pm-atm').toggle('slow', 'linear');
		}else if (($(this).val() == 'Star')){
			$('#pm-atm').toggle('slow', 'linear');
		}else if ($(this).val() == 'default') {
			$('.payment-method').toggle('slow', 'linear');
		}else {
			$('#pm-ibanking').toggle('slow', 'linear');
		}
	});
});