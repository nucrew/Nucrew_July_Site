// Scroll to element

$('.scroll').on('click', function() {
		
        var sectionID = $(this).attr('href');
        
        $('html, body').animate({
            scrollTop: $(sectionID).offset().top
        }, 500);
        
        return false;
    });