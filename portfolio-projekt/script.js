const button = document.getElementById('greetBtn');
const nameSpan = document.getElementById('name');

button.addEventListener('click', function() {
    const neuerName = prompt('Wie heisst du?');
    if (neuerName) {
        nameSpan.textContent = neuerName;
    }
});
// Banner Farbe ändern bei Doppelklick
const banner = document.querySelector('.banner');

function zufallsFarbe() {
    const farben = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    ];

    return farben[Math.floor(Math.random() * farben.length)];
}

banner.addEventListener('dblclick', function() {
    banner.style.background = zufallsFarbe();
});
const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const message = document.getElementById('userMessage').value;

    alert('Danke ' + name + '! Deine Nachricht wurde empfangen.\n\nE-Mail: ' + email + '\nNachricht: ' + message);

    form.reset();
});