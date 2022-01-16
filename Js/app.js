$(function() {

    var header = $("#header"),
    introH = $("#intro").innerHeight(),
    scrollOffset = 0;

/*fixed header*/
    $(window).on("scroll load resize", function() {

    scrollOffset = $(this).scrollTop();
    console.log(scrollOffset)

    if( scrollOffset >= introH) {
        header.addClass("fixed");
    } else {
        header.removeClass("fixed");
    }

    });

/*Smoth scroll*/

});