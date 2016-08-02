// Scroll Up!
$(document).ready(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});
	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});
});

$(document).ready(function(){
	var touch = $('#touch-menu');
    var menu = $('.nav');
 
    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function(){
        var wid = $(window).width();
        if(wid > 760 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});

$(document).ready(function() { 
	$("a.fancyimages").fancybox(); 
	}); 
	jQuery('.fancybox').fancybox({
	  	padding: 0, //убираем отступ
	  	helpers: {
	    overlay: {
	    	locked: false // отключаем блокировку overlay
	}
}});