$(document).ready(function() {
	var upBtn = $('#upstairsbtn');

	upBtn.on('click', function() {
		$('html, body').animate({scrollTop: top});
	});
});