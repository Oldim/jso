
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