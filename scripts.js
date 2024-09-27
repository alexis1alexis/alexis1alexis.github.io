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
    function checkForm() {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      
      // Enable the submit button if all fields are filled
      if (name !== "" && email !== "" && message !== "") {
        document.getElementById('submitButton').disabled = false;
      } else {
        document.getElementById('submitButton').disabled = true;
      }
    }

    // Add event listeners for input fields
    document.addEventListener('DOMContentLoaded', () => {
      document.getElementById('name').addEventListener('input', checkForm);
      document.getElementById('email').addEventListener('input', checkForm);
      document.getElementById('message').addEventListener('input', checkForm);
    });
	
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
(function () {
            emailjs.init("tqc8EALKu-bQgsddi"); // Replace with your EmailJS user ID
        })();

        function sendEmail(event) {
            event.preventDefault();
            const serviceID = 'service_5bon9t8'; // Replace with your service ID
            const templateID = 'contact_form'; // Replace with your template ID

            emailjs.sendForm(serviceID, templateID, event.target)
                .then(() => {
                    alert('Email sent successfully!');
                }, (error) => {
                    alert('Failed to send email: ' + JSON.stringify(error));
                });
        }