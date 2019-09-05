new WOW().init();

$(document).ready(function () {

    // Navbar sticky when user scrolls past it
    $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the 
        //nav bar to stick.  
        // console.log($(window).scrollTop());
        if ($(window).scrollTop() > 700) {
            $('#nav_bar').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() < 701) {
            $('#nav_bar').removeClass('navbar-fixed');
        }
    });

    // Contact form
    $('.submit').click(function (event) {
        event.preventDefault();
        console.log("clicked button");

        var email = $('.email').val();
        var subject = $('.subject').val();
        var message = $('.message').val();
        var statusElm = $('.status');
        statusElm.empty();

        if (email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append("<div>email is valid</div>");
        } else {
            statusElm.append("<div>email isn't valid</div>");
        }

        if (subject.length > 2) {
            statusElm.append("<div>subject is valid</div>");
        } else {
            statusElm.append("<div>subject isn't valid</div>");
        }

        if (message.length > 20) {
            statusElm.append("<div>message isn't valid</div>");
        } else {
            statusElm.append("<div>message isn't valid</div>");
        }

        console.log(email);
        console.log(subject);
        console.log(message);
    });

    // Initialize carousel
    $('.carousel').carousel();
});