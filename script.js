// Toggle cute mode
document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('cute-mode');
});

// Form validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const msg = document.getElementById('form-msg');

    if (name && email && message) {
        msg.textContent = "🌟 Message sent! Thank you!";
        msg.style.color = '#c1bfff';
        this.reset();
    } else {
        msg.textContent = "Please fill out all fields 🌙";
        msg.style.color = '#ff9e9e';
    }
});

// Sparkle cursor effect
document.addEventListener('mousemove', function(e) {
    const star = document.createElement('div');
    star.className = 'cursor-star';
    star.style.left = e.pageX + 'px';
    star.style.top = e.pageY + 'px';
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 1000);
});