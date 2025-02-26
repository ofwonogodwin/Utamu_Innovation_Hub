document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = this;
    const formData = new FormData(form);
    
    // Simple form validation and submission feedback
    if (form.checkValidity()) {
        // Here you would typically send the form data to a server
        // For this example, we'll just show a success message
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
    } else {
        alert('Please fill in all required fields correctly.');
    }
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});