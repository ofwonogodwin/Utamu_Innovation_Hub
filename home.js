document.addEventListener('DOMContentLoaded', () => {
    const paragraphs = document.querySelectorAll('.hero p.fade-in');
    paragraphs.forEach((p, index) => {
        const delay = p.getAttribute('data-delay') * 400; // 400ms stagger
        setTimeout(() => {
            p.classList.add('visible');
        }, delay);
    });
});

// Logo hover effect (optional, already handled by CSS, but this ensures smoothness)
const logo = document.querySelector('.hero-logo');
logo.addEventListener('mouseenter', () => {
    logo.style.transition = 'transform 0.5s ease';
});
logo.addEventListener('mouseleave', () => {
    logo.style.transform = 'rotate(0deg)'; // Reset rotation
});