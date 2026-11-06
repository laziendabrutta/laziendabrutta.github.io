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

// Voce di menu attiva in base alla sezione visibile
const links = document.querySelectorAll('#navbarNav .nav-link[href^="#"]');
const byId = {};
links.forEach(l => { byId[l.getAttribute('href').slice(1)] = l; });
if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting && byId[e.target.id]) {
                links.forEach(l => l.classList.remove('active'));
                byId[e.target.id].classList.add('active');
            }
        });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach(s => io.observe(s));
}

// Chiude il menu mobile dopo il click su una voce
document.querySelectorAll('#navbarNav .nav-link').forEach(l => {
    l.addEventListener('click', () => {
        const c = document.getElementById('navbarNav');
        if (c.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(c).hide();
    });
});

// Contact form
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Errore 418: Il modulo si rifiuta di essere inviato. Riprova dopo la riunione infinita.');
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
