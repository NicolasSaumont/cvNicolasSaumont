jQuery(document).ready(function () {

	/*Active menu item on click*/

    $('ul.navbar-nav > li').click(function (e) {
        $('ul.navbar-nav > li').removeClass('active');
        $(this).addClass('active');
    });

    /*Active menu item scrolling*/

	const sections = document.querySelectorAll("section");
	const navLi = document.querySelectorAll("nav .container ul li");
	window.onscroll = () => {
	  var current = "";

	  sections.forEach((section) => {
	    const sectionTop = section.offsetTop;
	    if (pageYOffset >= sectionTop - 60) {
	      current = section.getAttribute("id"); }
	  });

	  navLi.forEach((li) => {
	    li.classList.remove("active");
	    if (li.classList.contains(current)) {
	      li.classList.add("active");
	    }
	  });
	};

	/*Smooth navigation*/

	jQuery(document).ready(function($){

		$('a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function(event) {
		  // On-page links
		  if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
			&&
			location.hostname == this.hostname
		  ) {
			// Figure out element to scroll to
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			// Does a scroll target exist?
			if (target.length) {
			  // Only prevent default if animation is actually gonna happen
			  event.preventDefault();

			  $('html, body').animate({
				scrollTop: target.offset().top
			  }, 1000, function() {
				// Callback after animation
				// Must change focus!
				var $target = $(target);
				$target.focus();
				if ($target.is(":focus")) { // Checking if the target was focused
				  return false;
				} else {
				  $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
				  $target.focus(); // Set focus again
				}
			  });
			}
		  }
		});
		
	});

	/*Automatic navigation slider 'Path'*/

	var counter = 2;
		setInterval(function(){
			document.getElementById('radio' + counter).checked = true;
			counter++;
			if (counter > 4) {
				counter = 1;
			}
		}, 15000);
	
	/*Active menu_skills item on click*/

    $('ul.skills_menu > li').click(function (e) {
        $('ul.skills_menu > li').removeClass('active');
        $(this).addClass('active');
    });

    /*Active menu_skills_splitter item on click*/

    $('ul.skills_menu > li').click(function (e) {
        $('ul.skills_menu li div').removeClass('active');
        $(this).addClass('active');
    });

    /*Active skills on click*/

    $('._1').click(function (e) {
        $('.skill-item').removeClass('active');
        $('.skill-item.languages').addClass('active');
    });

    $('._2').click(function (e) {
        $('.skill-item').removeClass('active');
        $('.skill-item.softwares').addClass('active');
    });

    $('._3').click(function (e) {
        $('.skill-item').removeClass('active');
        $('.skill-item.softskills').addClass('active');
    });


	/*Toggle menu*/

	let toggle = document.querySelector('.toggle');
	let body = document.querySelector('body');
	let navbar = document.querySelector('.navbar-nav');

	toggle.addEventListener('click', function(){
		body.classList.toggle('open');
	})

	navbar.addEventListener('click', function(){
		body.classList.toggle('open');
	})

});
