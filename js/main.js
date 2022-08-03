(function($) {
    'use strict';

    // ================================== Preloader ==================================

    $(window).on('load', function() {
        var preloaderFadeOutTime = 500;
        function hidePreloader() {
            var preloader = $('.spinner-wrapper');
            setTimeout(function() {
                preloader.fadeOut(preloaderFadeOutTime);
            }, 500);
        }
        hidePreloader();
    })

    // ================================== Menu Responsive ==================================
    $(function() {
        $('.icon-nav-mobile-open').click(function() {
            $('.for-mobile').addClass('show');
            return false;
        })
        $('.icon-nav-mobile-close').click(function() {
            $('.for-mobile').removeClass('show');
            return false;
        })
    })

    // ================================== Header ==================================

    $(function() {
        // Show dropdown language on topbar
        $('.dropdown-text').on('click', function() {
            if ($(this).parent().find(".dropdown-language").hasClass('hide') === false) {
                $(this).parent().find(".dropdown-language").addClass('hide');
                $('.dropdown-language').addClass('hide');
            } else {
                $('.dropdown-language').addClass('hide');
                $(this).parent().find(".dropdown-language").removeClass('hide');
            }
        });
        $('body').on('click', function(event) {
            if ($('.dropdown-text').has(event.target).length === 0 && !$('.dropdown-text').is(event.target)) {
                $('.dropdown-language').addClass('hide');
            }
        });

    });

    $(function() {
        // Show dropdown monney on topbar
        $('.dropdown-text').on('click', function() {
            if ($(this).parent().find(".dropdown-monney").hasClass('hide') === false) {
                $(this).parent().find(".dropdown-monney").addClass('hide');
                $('.dropdown-monney').addClass('hide');
            } else {
                $('.dropdown-monney').addClass('hide');
                $(this).parent().find(".dropdown-monney").removeClass('hide');
            }
        });
        $('body').on('click', function(event) {
            if ($('.dropdown-text').has(event.target).length === 0 && !$('.dropdown-text').is(event.target)) {
                $('.dropdown-monney').addClass('hide');
            }
        });

        // Show - hide box search on menu
        $('.btn-search').on('click', function() {
            $('.nav-search').toggleClass('hide');
        });
        //hide box seach when click outside
        $('body').on('click', function(event) {
            if ($('.btn-search').has(event.target).length === 0 && !$('.btn-search').is(event.target) && $('.nav-search').has(event.target).length === 0 && !$('.nav-search').is(event.target)) {
                if ($('.nav-search').hasClass('hide') === false) {
                    $('.nav-search').toggleClass('hide');
                }
            }
        });

        //Book tour hotel datepicker
        if ($('.form-control.date').length) {
            // DATE PICKER
            $('.form-control.date').datepicker({
                format: 'mm/dd/yy',
                maxViewMode: 0,
                autoclose: true
            });
        }
    });
    

    // add class fixed for menu when scroll
    if ($('.header-default').hasClass('header-style-1') || $('.header-default').hasClass('header-style-2'))  {
        var header_height = $('.header-default'),
            offset = header_height.offset();

        $(window).scroll(function() {
            if ($(window).scrollTop() > offset.top) {
                $(".header-default").addClass('header-fixed');
            } else {
                $(".header-default").removeClass('header-fixed');
            }
        });
    };

    // show menu when scroll up, hide menu when scroll down
    var lastScroll = 50;
    $(window).on('scroll load', function(event) {
        var st = $(this).scrollTop();
        if (st > lastScroll) {
            $('.header-default').addClass('hide-menu');
        } else if (st < lastScroll) {
            $('.header-default').removeClass('hide-menu');
        }
        if ($(window).scrollTop() == 0) {
            $('.header-default').removeClass('.header-fixed').removeClass('hide-menu');
        };
        lastScroll = st;

    });


    // ================================== Button Back Top ==================================

    $(function() {

        // Scroll Event
        $(window).on('scroll', function() {
            var scrolled = $(window).scrollTop();
            if (scrolled > 300) $('.back-top').addClass('active');
            if (scrolled < 300) $('.back-top').removeClass('active');
        });


        $('.back-top').click(function() {
            $('html,body').animate({
                scrollTop: 0
            }, 700);
            return false;
        });
    });

    // ================================== Animate ==================================

    $(function() {
        $('[class *= "animated"]').addClass('wow').attr('data-wow-duration', '1.5s');
        $('.animated-Fade-In-Left').addClass('fadeInLeft').attr('data-wow-delay', '0.5s');
        $('.animated-Fade-In-Right').addClass('fadeInRight').attr('data-wow-delay', '0.5s');
        $('.animated-Slide-In-Down').addClass('slideInDown').attr('data-wow-delay', '0.5s');
        $('.animated-Slide-In-Left').addClass('slideInLeft').attr('data-wow-delay', '0.5s');
        $('.animated-Slide-In-Right').addClass('slideInRight').attr('data-wow-delay', '0.5s');
        /*Fade In Up and Other Delay*/
        $('.animated-Fade-In-Up-1').addClass('fadeInUp').attr('data-wow-delay', '0.2s');
        $('.animated-Fade-In-Up-2').addClass('fadeInUp').attr('data-wow-delay', '0.4s');
        $('.animated-Fade-In-Up-3').addClass('fadeInUp').attr('data-wow-delay', '0.6s');
        $('.animated-Fade-In-Up-4').addClass('fadeInUp').attr('data-wow-delay', '0.8s');
        $('.animated-Fade-In-Up-5').addClass('fadeInUp').attr('data-wow-delay', '1s');
        $('.animated-Fade-In-Up-6').addClass('fadeInUp').attr('data-wow-delay', '1.2s');
        /*Fade In and Other Delay*/
        $('.animated-Fade-In-1').addClass('fadeIn').attr('data-wow-delay', '0.4s');
        $('.animated-Fade-In-2').addClass('fadeIn').attr('data-wow-delay', '0.6s');
        $('.animated-Fade-In-3').addClass('fadeIn').attr('data-wow-delay', '0.8s');
        $('.animated-Fade-In-4').addClass('fadeIn').attr('data-wow-delay', '1s');
        $('.animated-Fade-In-5').addClass('fadeIn').attr('data-wow-delay', '1.2s');
        $('.animated-Fade-In-6').addClass('fadeIn').attr('data-wow-delay', '1.4s');
    });
    $(function() {
        new WOW().init();
    });

    // ================================== Carousel Custom ==================================

    $(function() {
        $('#carousel01').owlCarousel({
            loop: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 2,
                    nav: true,
                    loop: true,
                    margin: 30,
                },
                960: {
                    items: 4,
                    nav: true,
                    loop: true,
                    margin: 15,
                }
            }
        })
    })
    $(function() {
        $('#carousel02').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 2,
                    nav: true,
                    loop: false,
                    margin: 30
                },
                1000: {
                    items: 3,
                    nav: true,
                    loop: false,
                    margin: 30
                }
            }
        })
    })

    $(function() {
        $('#carousel03').owlCarousel({
            loop: true,
            margin: 10,
            smartSpeed: 2000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: true,
                    loop: false,
                    margin: 30
                },
                1170: {
                    items: 1,
                    nav: true,
                    loop: true,
                    margin: 30

                }
            }
        })
    })

    $(function() {
        $('#carousel04').owlCarousel({
            loop: true,
            margin: 10,
            smartSpeed: 1000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 2,
                    nav: true,
                    loop: false,
                    margin: 30
                },
                1170: {
                    items: 4,
                    nav: true,
                    loop: true,
                    margin: 25

                }
            }
        })
    })

      $(function() {
        $('#carousel05').owlCarousel({
            loop: true,
            margin: 10,
            smartSpeed: 1000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    nav: true
                },
                600: {
                    items: 3,
                    nav: true,
                    loop: false,
                    margin: 30
                },
                1170: {
                    items: 5,
                    nav: true,
                    loop: true,
                    margin: 25

                }
            }
        })
    })


      $(function() {
        $('#carousel06').owlCarousel({
            loop: true,
            margin: 10,
            smartSpeed: 1000,
            autoplay:true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 2,
                    nav: true,
                    loop: false,
                    margin: 30
                },
                1170: {
                    items: 3,
                    nav: true,
                    loop: true,
                    margin: 20

                }
            }
        })
    })

   $(function() {
        $('#carousel07').owlCarousel({
            loop: true,
            margin: 10,
            smartSpeed: 1000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    nav: true
                },
                600: {
                    items: 3,
                    nav: true,
                    loop: false,
                    margin: 30
                },
                1170: {
                    items: 5,
                    nav: true,
                    loop: true,
                    margin: 25

                }
            }
        })
    })
   $(function() {
        $('#carousel08').owlCarousel({
            loop: true,
            margin: 10,
            smartSpeed: 1000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    nav: true
                },
                600: {
                    items: 5,
                    nav: true,
                    loop: false,
                    margin: 30
                },
                1170: {
                    items: 7,
                    nav: true,
                    loop: true,
                    margin: 25

                }
            }
        })
    })

  

    // ================================== Count Number ==================================

    $(function() {
        var counters = $(".count");
        var countersQuantity = counters.length;
        var counter = [];
        for (var i = 0; i < countersQuantity; i++) {
            counter[i] = parseInt(counters[i].innerHTML);
        }
        var count = function(start, value, id) {
            var localStart = start;
            setInterval(function() {
                if (localStart < value) {
                    localStart++;
                    counters[id].innerHTML = localStart;
                }
            }, 80);
        }
        for (var j = 0; j < countersQuantity; j++) {
            count(0, counter[j], j);
        }
    });


})(jQuery);