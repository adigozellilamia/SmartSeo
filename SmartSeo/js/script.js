$(document).ready(function(){
    $("#firstCarousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
        
      }); 
    $(".footer-carousel").owlCarousel({
        stagePadding: 50,
        loop:false,
        autoplay:true,
        autoplayTimeout:4000,
        margin:10,
        nav:false,
        dots:false,
        smartSpeed:1500,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
        
      });

    $("#secondCarousel").owlCarousel({
        items: 3,
        loop: true,
        margin:3,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        smartSpeed:1500,
         responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            800:{
                items:3
            }
        }
      });
      $('#testimonial-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            items: 1,
            smartSpeed: 1000,
            dots: false,
            nav: false,
            
            
        });

    

})




