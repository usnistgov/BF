import 'bootstrap/dist/js/bootstrap.min.js'
// import 'bootstrap/dist/js/bootstrap.min.js'

var carousel1 = $('#carouselControls').carousel();
var carousel2= $('#carouselControls2').carousel();
carousel1.on('slide.bs.carousel', function(event) {
    var to = $(event.relatedTarget).index();
    carousel2.carousel(to);
});