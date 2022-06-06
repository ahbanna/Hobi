(function ($) {
    "use strict";

    // mean-menu (mobile)
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991",
        meanMenuOpen: "<span></span><span></span><span></span>",
    });


    //wow
    new WOW().init();


    //pop-up video
    $('.popup-video').magnificPopup({
        type: 'iframe'
        // other options
    });




    //    stuff
    //masonry
    var $grid = $('.portfolio-active').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: 1
        }
    })



    // filter items on button click
    $('.portfolio-menu').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });


    //for menu active class
    $('.portfolio-menu button').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });




    //map
    function basicmap() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,
            scrollwheel: false,
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(24.85098, 89.37108), // New York
            // This is where you would paste any style found on Snazzy Maps.
            styles: [
                {
                    "featureType": "administrative.country",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "simplified"
            },
                        {
                            "hue": "#ff0000"
            }
        ]
    }
]
        };
        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('contact-map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(24.85098, 89.37108),
            map: map,
            title: 'Cryptox'
        });
    }
    if ($('#contact-map').length != 0) {
        google.maps.event.addDomListener(window, 'load', basicmap);
    }


    //    counting
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //testimonial
    $('.testimonial-active').slick({
        infinite: true,
        dots: false,
        nextArrow: '<button type="button" class="slick - next "><i class="fas fa-arrow-right"></i></button>',
        prevArrow: '<button type="button" class="slick - prev"><i class="fas fa-arrow-left"></i></button>',
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: false,
                    arrows: true,
                    slidesToShow: 2,
                }
                    },
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    arrows: false,
                    slidesToShow: 1,
                }
                    },
                ]
    });

    //newsfeed
    $('.news-active').slick({
        infinite: true,
        dots: false,
        nextArrow: '<button type="button" class="slick - next "><i class="fas fa-arrow-right"></i></button>',
        prevArrow: '<button type="button" class="slick - prev"><i class="fas fa-arrow-left"></i></button>',
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: false,
                    arrows: true,
                    slidesToShow: 2,
                }
                    },
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    arrows: false,
                    slidesToShow: 1,
                }
                    },
                ]
    });


    // scroll
    $('body').materialScrollTop();





})(jQuery);
