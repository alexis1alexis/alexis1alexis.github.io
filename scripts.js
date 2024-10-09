//
// Scripts
// 

// Initialize EmailJS
(function () {
    emailjs.init({
        publicKey: "9dgsMPWZcerZehsrg",
    });
})();

window.onload = function () {
    const form = document.getElementById('contact-form');
    const submitButton = document.getElementById('submitButton');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    // Function to check if all required fields are filled
    function checkFormCompletion() {
        const requiredFields = form.querySelectorAll('input[required], textarea[required]');
        let allFilled = true;
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                allFilled = false;
            }
        });
        submitButton.disabled = !allFilled;
    }

    // Check form completion when fields change
    form.addEventListener('input', checkFormCompletion);

    // Handle form submission with EmailJS
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Send the form data using EmailJS
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(() => {
                console.log('SUCCESS!');
                successMessage.style.display = 'block';
                errorMessage.style.display = 'none';
                form.reset(); // Reset the form fields
                submitButton.disabled = true; // Disable the submit button again after submission
            }, (error) => {
                console.log('FAILED...', error);
                successMessage.style.display = 'none';
                errorMessage.style.display = 'block';
            });
    });

    // Initial check to see if fields are already filled
    checkFormCompletion();
}

// Function to generate a random contact number
        function generateContactNumber() {
            return Math.floor(Math.random() * 1000000); // Generates a random number between 0 and 999999
        }

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
	
	// Attach the sendEmail function to the form submission event
        const form = document.getElementById('contactForm');
        form.addEventListener('submit', sendEmail);
});