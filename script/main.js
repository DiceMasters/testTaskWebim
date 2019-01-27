$(document).ready(function() {

	let btn = $('#collapseButton')
	let menu = $('#collapseMenu')
	
	btn.click( function(){
		menu.css('margin-left', 'unset')
		$('.closeCollapseButton').css('display', 'block')
	})

	$('#closeButton').click( function(){
		menu.css('margin-left', '-100%')
		$('.closeCollapseButton').css('display', 'none')
	})

})