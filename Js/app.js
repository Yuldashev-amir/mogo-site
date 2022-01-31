
$(function() {

    var header = $("#header"),
    introH = $("#intro").innerHeight(),
    scrollOffset = 0;

/*fixed header*/
    $(window).on("scroll load resize", function() {

    scrollOffset = $(this).scrollTop();

    if( scrollOffset >= introH) {
        header.addClass("fixed");
    } else {
        header.removeClass("fixed");
    }

    });

/*Smoth scroll*/

$("[data-scroll]").on("click", function(event){
    event.preventDefault();

    var blockId = $(this).data("scroll"),
        blockOffset = $(blockId).offset().top;
        console.log(blockOffset);

    $("html, body").animate( {
        scrollTop: blockOffset
    }, 500);

});

/*Menu nav toggle*/

$("#nav__toggle").on("click", function(event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
});


/* Collapse */

$("[data-collapse]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
    blockId = $this.data("collapse");

    $this.toggleClass("active");


});



/* slider */

$("[data-slider]").slick({
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
})











});