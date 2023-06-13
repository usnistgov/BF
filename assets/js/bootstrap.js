import 'bootstrap/dist/js/bootstrap.min.js'
// import 'bootstrap/dist/js/bootstrap.min.js'

/*var carousel1 = $('#carouselControls').carousel();
var carousel2= $('#carouselControls2').carousel();
carousel1.on('slide.bs.carousel', function(event) {
    var to = $(event.relatedTarget).index();
    carousel2.carousel(to);
});*/



// If there is more than one item
var carouselLength = $('.carousel-item').length - 1;
$(document).ready(function(){
    // When strating hide prev arrow
    $('.carousel-control-prev').hide();
  });
// If there is more than one item
if (carouselLength) {
    $('.carousel-control-next').removeClass('d-none');
}

$('.carousel').on('slide.bs.carousel', function (e) {

    var slidingItemsAsIndex = $('.carousel-item').length - 1;
  
    // If last item hide next arrow
    if($(e.relatedTarget).index() == slidingItemsAsIndex ){
        $('.carousel-control-next').hide();
    }
    else{
        $('.carousel-control-next').show();
    }
  
    // If first item hide prev arrow
    if($(e.relatedTarget).index() == 0){
        $('.carousel-control-prev').hide();
    }
    else{
        $('.carousel-control-prev').show();
    }
  
  })