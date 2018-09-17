let dh = $(window).height();
// display height

$(document).ready(function () {
    $(window).resize(function () {
       dh = $(window).height();
       console.log(dh);
    });
    // if user resize display height <dh> refresh
   $('button.hamburger').click(function () {
       $(this).toggleClass('is-active');
       $('.mobile-menu').toggleClass('visible');
   });
    //Mobile menu open
    $(document).scroll(function () {
        if ($(document).scrollTop() > 0) {
            $('header').addClass('header-shadow');
        } else {
            $('header').removeClass('header-shadow');
        }
        //add background on header if user scroll page


        var advoffset = $('.advantage').offset();
        // variable for show effect (#s-about-us advantage)
        if ($(document).scrollTop() -30 > advoffset.top - dh) {
            $('.advantage div').addClass('visible-adv');
        }
        // smooth appearance div's with icons
        var addoffset = $('.additional').offset();
        if ($(document).scrollTop() - 30 > addoffset.top - dh) {
            $('.additional div').addClass('visible-add');
        }
    })


});

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoHeight: true,
        center: true,
        nav: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1199:{
                items:3,
                // nav:true,
            }
        }
    });
    // $('.owl-carousel').owlCarousel({
    //     loop:true,
    //     margin:10,
    //     // autoWidth: true,
    //     autoHeight: true,
    //     center: true,
    //     nav:true,
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:1
    //         },
    //         1199:{
    //             items:3
    //         }
    //     }
    // });
});