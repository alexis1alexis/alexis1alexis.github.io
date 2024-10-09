/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

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

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

//// Function to enable or disable the submit button based on form inputs
        // function validateForm() {
            // const name = document.getElementById('user_name').value.trim();
            // const email = document.getElementById('user_email').value.trim();
            // const message = document.getElementById('message').value.trim();
            // const submitButton = document.getElementById('submitButton');

            // // Check if all required fields are filled
            // if (name && email && message) {
                // submitButton.disabled = false;
            // } else {
                // submitButton.disabled = true;
            // }
        // }

        // // Attach event listeners to form fields to validate input
        // document.getElementById('user_name').addEventListener('input', validateForm);
        // document.getElementById('user_email').addEventListener('input', validateForm);
        // document.getElementById('message').addEventListener('input', validateForm);
	
//Hover over each letter scale transform
const text = document.getElementById('letter-hover');
	text.innerHTML = text.textContent.split('').map(letter => `<span>${letter}</span>`).join('');
// const text = document.getElementById('letter-hover');
        // text.innerHTML = text.textContent.split('').map(letter => {
            // if (letter === ' ') {
                // return `<span class="space"> </span>`; // Wrap space in a span
            // }
            // return `<span>${letter}</span>`; // Wrap each letter in a span
        // }).join('');

// Function to generate a random contact number
        function generateContactNumber() {
            return Math.floor(Math.random() * 1000000); // Generates a random number between 0 and 999999
        }
// Set the hidden contact number field with a generated value
		document.getElementById('contact_number').value = generateContactNumber();
		
// Attach the sendEmail function to the form submission event
        const form = document.getElementById('contactForm');
        form.addEventListener('submit', sendEmail);
		
// Send the form data using EmailJS
		emailjs.sendForm(serviceID, templateID, event.target)
			.then(() => {
				alert('Email sent successfully!');
				// Reset the form after successful submission
				document.getElementById('contactForm').reset();
				// // Disable the submit button after reset
				// document.getElementById('submitButton').disabled = true;
			// }, (error) => {
				alert('Failed to send email: ' + JSON.stringify(error));
			});