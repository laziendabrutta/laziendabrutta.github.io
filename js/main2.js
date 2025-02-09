AOS.init({
    duration: 1000,
    once: true
});

// Gestione del modulo di contatto
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Errore 418: Il modulo si rifiuta di essere inviato. Riprova dopo la riunione infinita.");
});

// Imposta l'anno corrente nel footer quando la pagina è caricata
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('year').textContent = new Date().getFullYear();
});

