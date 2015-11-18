$(document).ready(init);
var contador = 1;
function init(){
	$('.menu_bar').click(menu);
}

function menu(){
	if(contador==1){
		$('nav').animate({
			left: '0'
		});
		contador = 0;
	}
else{
	contador = 1;
	$('nav').animate({
		left: -100%
	});
}
	}
}