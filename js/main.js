$(function () {
    $(window).scroll(function () {
        var top = $(this).scrollTop()
        if (top > 100) {
            $("header").css({ background: "#fff" })

        } else {
            $("header").css({ background: "transparent" })
        }
    })

    $('.navToggle').click(() => {
        $(".navLinks").toggleClass('active')
    })












    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;
            var ht = $(hash).offset().top - 150
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: ht
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                // window.location.hash = hash;
            });
        } // End if
    });
});




$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      loop: true,
      nav: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        769: {
          items: 4
        }
      }
    });
  });

// animation

new WOW().init();