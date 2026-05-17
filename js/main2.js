AOS.init({
    duration: 900,
    once: true,
    offset: 60,
    easing: 'ease-out-cubic'
});

// Navbar scroll effect
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// Contact form
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Errore 418: Il modulo si rifiuta di essere inviato. Riprova dopo la riunione infinita.');
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
