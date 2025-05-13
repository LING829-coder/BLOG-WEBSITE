// Highlight the active navigation link based on the current page
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav ul li a');
    const currentPath = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        // Handles both root and subdirectory navigation
        if (
            link.getAttribute('href') === currentPath ||
            (currentPath === '' && link.getAttribute('href').includes('index.html')) ||
            (window.location.pathname.endsWith('/') && link.getAttribute('href').includes('index.html'))
        ) {
            link.classList.add('active');
        }
    });

    // Newsletter subscription form (index.html)
    const newsletterForm = document.querySelector('form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            if (emailInput && validateEmail(emailInput.value)) {
                alert('Thank you for subscribing, ' + emailInput.value + '!');
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }

    // Contact form validation (if you add a contact form)
    const contactForm = document.querySelector('form.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = contactForm.querySelector('input[name="name"]');
            const email = contactForm.querySelector('input[name="email"]');
            const message = contactForm.querySelector('textarea[name="message"]');
            if (
                name.value.trim() &&
                validateEmail(email.value) &&
                message.value.trim()
            ) {
                alert('Thank you for contacting us, ' + name.value + '!');
                contactForm.reset();
            } else {
                alert('Please fill in all fields with valid information.');
            }
        });
    }
});

// Email validation helper
function validateEmail(email) {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}