$(function () {
    $('#sytImg').click(function (e) {
        if ($(this).attr("src") === "./images/SYT1.png")
            $(this).attr("src", "./images/SYT2.png");
        else if ($(this).attr("src") === "./images/SYT2.png")
            $(this).attr("src", "./images/SYT1.png");
    });
});

$(function () {
    $('#bfImg').click(function (e) {
        if ($(this).attr("src") === "./images/BFLifeCounter1.png")
            $(this).attr("src", "./images/BFLifeCounter2.png");
        else if ($(this).attr("src") === "./images/BFLifeCounter2.png")
            $(this).attr("src", "./images/BFLifeCounter.png");
        else if ($(this).attr("src") === "./images/BFLifeCounter.png")
            $(this).attr("src", "./images/BFLifeCounter1.png");
    });
});


$(function () {
    $('#vgImg').click(function (e) {
        if ($(this).attr("src") === "./images/vgBoard1.png")
            $(this).attr("src", "./images/vgBoard.png");
        else if ($(this).attr("src") === "./images/vgBoard.png")
            $(this).attr("src", "./images/vgBoard1.png");
    });
});

$(function () {
    $('#imoImg').click(function (e) {
        if ($(this).attr("src") === "./images/immowow.png")
            $(this).attr("src", "./images/immowow1.png");
        else if ($(this).attr("src") === "./images/immowow1.png")
            $(this).attr("src", "./images/immowow2.png");
        else if ($(this).attr("src") === "./images/immowow2.png")
            $(this).attr("src", "./images/immowow.png");
    });
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}