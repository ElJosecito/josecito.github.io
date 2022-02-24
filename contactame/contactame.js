


$(function() {
    var header = $(".header");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 1) {
            header.removeClass('header').addClass("header-alt");
        } else {
            header.removeClass("header-alt").addClass('header');
        }
    });
});




$(function() {
    var header = $(".letter-header");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 2) {
            header.removeClass('letter-header').addClass("letter-header-alt");
        } else {
            header.removeClass("letter-header-alt").addClass('letter-header');
        }
    });
});





$(function() {
    var header = $(".letter-logo");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 3) {
            header.removeClass('letter-logo').addClass("letter-logo-alt");
        } else {
            header.removeClass("letter-logo-alt").addClass('letter-logo');
        }
    });
});