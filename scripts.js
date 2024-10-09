//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
	
	// Set the hidden contact number field with a generated value
		document.getElementById('contact_number').value = generateContactNumber();
		
	// Attach the sendEmail function to the form submission event
        const form = document.getElementById('contactForm');
        form.addEventListener('submit', sendEmail);
	
	// Select the profile image element by its ID
	const profilePhoto = document.getElementById('profile-photo');

	// Define the paths to the static image and the animated GIF
	const staticPhoto = 'img/profile/static-photo.JPEG';
	const animatedGif = 'img/profile/animated-photo.GIF';

	// Add event listeners for mouseover and mouseout to change the image
	profilePhoto.addEventListener('mouseover', () => {
		profilePhoto.src = animatedGif; // Change to GIF on hover
	});

	profilePhoto.addEventListener('mouseout', () => {
		profilePhoto.src = staticPhoto; // Change back to static image when not hovering
	});
});

// Function to generate a random contact number
        function generateContactNumber() {
            return Math.floor(Math.random() * 1000000); // Generates a random number between 0 and 999999
        }