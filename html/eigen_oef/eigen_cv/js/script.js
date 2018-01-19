
$(document).ready(function(){    
    $('body').scrollspy({ target: '#navigation' });    
});


$(function() {
    $('.nav a').on('click', function(){ 
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });
});

$(document).ready(function(){    
    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });    
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });    
});


// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');    
    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }    
    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();    
    // top position relative to the document
    var pos = $(id).offset().top;    
    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});


jQuery(document).ready(function($){
	var timelineBlocks = $('.cd-timeline-block'),
		offset = 0.8;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) 
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}
});