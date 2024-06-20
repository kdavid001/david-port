/* Description: Custom JS file */


(function($) {
    "use strict"; 
	
    /* Navbar Scripts */
    // jQuery to collapse the navbar on scroll
    $(window).on('scroll load', function() {
		if ($(".navbar").offset().top > 60) {
			$(".fixed-top").addClass("top-nav-collapse");
		} else {
			$(".fixed-top").removeClass("top-nav-collapse");
		}
    });
    
	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 600, 'easeInOutExpo');
			event.preventDefault();
		});
    });

    // offcanvas script from Bootstrap + added element to close menu on click in small viewport
    $('[data-toggle="offcanvas"], .navbar-nav li a:not(.dropdown-toggle').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    })

    // hover in desktop mode
    function toggleDropdown (e) {
        const _d = $(e.target).closest('.dropdown'),
            _m = $('.dropdown-menu', _d);
        setTimeout(function(){
            const shouldOpen = e.type !== 'click' && _d.is(':hover');
            _m.toggleClass('show', shouldOpen);
            _d.toggleClass('show', shouldOpen);
            $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
        }, e.type === 'mouseleave' ? 300 : 0);
    }
    $('body')
    .on('mouseenter mouseleave','.dropdown',toggleDropdown)
    .on('click', '.dropdown-menu a', toggleDropdown);


    /* Move Form Fields Label When User Types */
    // for input and textarea fields
    $("input, textarea").keyup(function(){
		if ($(this).val() != '') {
			$(this).addClass('notEmpty');
		} else {
			$(this).removeClass('notEmpty');
		}
	});
	

    /* Back To Top Button */
    // create the back to top button
    $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
    var amountScrolled = 700;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
        }
    });


	/* Removes Long Focus On Buttons */
	$(".button, a, button").mouseup(function() {
		$(this).blur();
	});


 

    
                $(".header")  // Set the color first
                    .fadeIn("slow");         // Fade in the text
                    $(".about").ready(function(){
                        // Number of times to repeat the fade-in
                        let repeatCount = 3;
                        let currentIndex = 0;
                        
                        function fadeInWithDelay() {
                            if (currentIndex < repeatCount) {
                                // Fade in the element
                                $(".h1-large").fadeIn("slow", function() {
                                    // After fading in, wait for 1 second (1000 milliseconds)
                                    setTimeout(function() {
                                        // After the delay, fade out the element
                                        $(".h1-large").fadeOut("slow", function() {
                                            // Increment the index and repeat
                                            currentIndex++;
                                            fadeInWithDelay();
                                            $(".h1-large").fadeIn("slow");
                                        });
                                    }, 1000); // Delay of 1000 milliseconds (1 second)
                                });
                            }
                        }
            
                        // Start the fade-in process when the document is ready
                        fadeInWithDelay();
                    });

                    (function() {
                        // https://dashboard.emailjs.com/admin/account
                        emailjs.init({
                          publicKey: "hS3fSCI9TvW8Tv_Jw",
                        });
                    })();
                    
                    window.onload = function() {
                        document.getElementById('contact-form').addEventListener('submit', function(event) {
                            event.preventDefault();
                            // these IDs from the previous steps
                            emailjs.sendForm('service_8i2yzm3', 'contact_form', this)
                                .then(() => {
                                    alert('Your Request had been sent!');
                                }, (error) => {
                                    alert('Error please try again...', error);
                                });
                        });
                    }
        
})(jQuery);

