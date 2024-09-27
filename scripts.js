/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
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

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

// Function to check if all required fields are filled
    // function checkForm() {
      // const name = document.getElementById('name').value.trim();
      // const email = document.getElementById('email').value.trim();
      // const message = document.getElementById('message').value.trim();
      
      // // Enable the submit button if all fields are filled
      // if (name !== "" && email !== "" && message !== "") {
        // document.getElementById('submitButton').disabled = false;
      // } else {
        // document.getElementById('submitButton').disabled = true;
      // }
    // }

    // // Add event listeners for input fields
    // document.addEventListener('DOMContentLoaded', () => {
      // document.getElementById('name').addEventListener('input', checkForm);
      // document.getElementById('email').addEventListener('input', checkForm);
      // document.getElementById('message').addEventListener('input', checkForm);
    // });
	
// Select the profile image element by its ID
const profilePhoto = document.getElementById('profile-photo');

// Define the paths to the static image and the animated GIF
const staticPhoto = 'img/static-photo.JPEG';
const animatedGif = 'img/animated-photo.GIF';

// Add event listeners for mouseover and mouseout to change the image
profilePhoto.addEventListener('mouseover', function() {
    profilePhoto.src = animatedGif; // Change to GIF on hover
});

profilePhoto.addEventListener('mouseout', function() {
    profilePhoto.src = staticPhoto; // Change back to static image when not hovering
});

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

//email server using EmailJS
// <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
// <script type="text/javascript">
	// (function() {
		// // https://dashboard.emailjs.com/admin/account
		// emailjs.init({
		  // publicKey: "tqc8EALKu-bQgsddi",
		// });
	// })();
// </script>
// <script type="text/javascript">
	// window.onload = function() {
		// document.getElementById('contact-form').addEventListener('submit', function(event) {
			// event.preventDefault();
			// // these IDs from the previous steps
			// emailjs.sendForm('contact_service', 'contact_form', this)
				// .then(() => {
					// console.log('SUCCESS!');
				// }, (error) => {
					// console.log('FAILED...', error);
				// });
		// });
	// }
// Initialize EmailJS using your user ID
// (function () {
    // emailjs.init("tqc8EALKu-bQgsddi"); // Replace "YOUR_USER_ID" with your EmailJS user ID
// })();

// // Function to send an email using EmailJS
// function sendEmail(event) {
    // event.preventDefault(); // Prevent form submission to server

    // const serviceID = 'contact_service'; // Replace with your EmailJS service ID
    // const templateID = 'contact-form'; // Replace with your EmailJS template ID

    // // Send the form data using EmailJS
    // emailjs.sendForm(serviceID, templateID, event.target)
        // .then(() => {
            // alert('Email sent successfully!');
        // }, (error) => {
            // alert('Failed to send email: ' + JSON.stringify(error));
        // });
// }

// // Attach the sendEmail function to the form submission event
// const form = document.getElementById('contactForm');
// form.addEventListener('submit', sendEmail);
