/**
 * Created by acm1899.3 on 19.10.2016.
 */
function show() {
    var btn = document.getElementById('popup-form');
    if(btn.style.display == "block") {
        btn.style.display = "none";
    }
    else{
        btn.style.display = "block";
    }
}
$('#banner-carousel').elastislide();
$(window).load(function () {

    var carouselCaptionWidth = $('#carousel-sidebar .active img').width();
    $('#carousel-sidebar img').each(function () {
        $(this).attr('width', carouselCaptionWidth);
    })
    $('.sidebar-carousel-caption, #carousel-sidebar .carousel-indicators, .sidebar .banner').css('width', carouselCaptionWidth + 'px');
})
