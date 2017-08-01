$(document).ready(function(){
	$('#slct-bank').on('change', function(){
		$('.payment-method').hide();
		if($(this).val() == 'Hi'){
			console.log(($(this).val())); // DEBUG
			$('#pm-ibanking').toggle('slow', 'linear');
		}else if (($(this).val() == 'ABC') || ($(this).val() == 'Pac')){
			$('#pm-ibanking').toggle('slow', 'linear');
			$('#pm-atm').toggle('slow', 'linear');
		}else if (($(this).val() == 'Credit') || ($(this).val() == 'Pay')){
			
			$('#pm-ibanking').toggle('slow', 'linear');
			$('#pm-atm').toggle('slow', 'linear');
			$('#pm-counter').toggle('slow', 'linear');
		}else if ($(this).val() == 'default') {
			$('.payment-method').toggle('slow', 'linear');
		}
	});
});