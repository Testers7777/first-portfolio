tippy('#discord', {
    content: 'discord',
    theme: "type",
    offset: [0, 12],
    arrow: false,
});
tippy('#github', {
    content: 'github',
    theme: "type",
    offset: [0, 12],
    arrow: false,
});
tippy('#chess', {
    content: 'chess',
    theme: "type",
    offset: [0, 12],
    arrow: false,
});

window.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('stars-container');
    const numStars = 100;

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${Math.random() * window.innerHeight}px`;
        star.style.left = `${Math.random() * window.innerWidth}px`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        star.style.animationDuration = `${Math.random() * 5 + 5}s`;
        container.appendChild(star);
    }
});

window.addEventListener('resize', () => {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.style.top = `${Math.random() * window.innerHeight}px`;
        star.style.left = `${Math.random() * window.innerWidth}px`;
    });
});

tippy('.badge1', {
    content: 'HypeSquad Bravery',
    theme: "type",
    offset: [0, 12]
});

tippy('.badge2', {
    content: 'Développeur actif',
    theme: "type",
    offset: [0, 12]
});

tippy('.badge3', {
    content: 'Abonné depuis 10 août 2023',
    theme: "type",
    maxWidth: "200px",
    offset: [0, 12]
});

tippy('.badge4', {
    content: `Ancien nom : DIISLAY#9240`,
    theme: "type",
    maxWidth: "200px",
    offset: [0, 12]
});

tippy('#git', {
    content: ':logo_github:',
    theme: "type"
});

tippy('#horn', {
    content: ':spiffo_laptop:',
    theme: "type"
});

tippy('.status', {
    content: 'Inactif',
    theme: "type"
});
