$(document).ready(function() {
$('#slides').superslides({

animation:'fade',
play: 5000
});

var typed = new Typed(".typed", {
strings: ["Game Designer.", "Director.","Photographer.", "Human."],
typeSpeed: 70,
loop: true,
startDelay: 1000,
showCursor: false

});
$('.owl-carousel').owlCarousel({
    loop:true,
    items: 4,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        938:{
            items:4
        }
    }
});



//2003.21875
  var skillsTopOffset = $(".skillsSection").offset().top;

  $(window).scroll(function(){

    if(window.pageYOffset > skillsTopOffset - $(window).height()+200){

      $('.chart').easyPieChart({
            easing: 'easeInOut',
            barColor: '#fff',
            trackColor: false,
            scaleColor: false,
            lineWidth: 4,
            size: 152,
            animate:{
              duration: 3000,
              enabled: true
            },
            onStep: function(from, to, percent){
              $(this.el).find('.percent').text(Math.round(percent));
            }
        });

    }
  });

});
