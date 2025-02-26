// Slide in text
document.addEventListener('DOMContentLoaded', () => {
    const paragraphs = document.querySelectorAll('.about-text p.slide-in');
    paragraphs.forEach((p, index) => {
        const delay = p.getAttribute('data-delay') * 400; // 400ms stagger
        setTimeout(() => {
            p.classList.add('visible');
        }, delay);
    });

    // Animate stat counters
    const stats = document.querySelectorAll('.stat-item');
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const number = stat.querySelector('.stat-number');
        let count = 0;
        const speed = 50; // Adjust speed (ms per increment)

        const updateCount = () => {
            const increment = Math.ceil(target / 50); // Smooth increment
            count += increment;
            if (count >= target) {
                count = target;
                clearInterval(counter);
            }
            number.textContent = count;
        };

        const counter = setInterval(updateCount, speed);
    });
});