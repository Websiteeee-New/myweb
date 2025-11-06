// Fade-in saat scroll
window.addEventListener('scroll', () => {
    const heroText = document.querySelector('.hero-text h2');
    const heroP = document.querySelector('.hero-text p');
    const btn = document.querySelector('.btn');
    const trigger = window.innerHeight / 5 * 4;

    const heroTop = heroText.getBoundingClientRect().top;
    if(heroTop < trigger) {
        heroText.classList.add('fade-in');
        heroP.classList.add('fade-in-delay');
        btn.classList.add('fade-in-delay2');
    }
});
// Fade-in skills saat scroll
window.addEventListener('scroll', () => {
    const skills = document.querySelectorAll('.skill-fill');
    skills.forEach(skill => {
        const top = skill.getBoundingClientRect().top;
        if(top < window.innerHeight - 100){
            skill.style.width = '100%';
        }
    });
});

// Particle JS Config
particlesJS("particles-js", {
    "particles": {
        "number": {"value":60,"density":{"enable":true,"value_area":800}},
        "color":{"value":"#38bdf8"},
        "shape":{"type":"circle"},
        "opacity":{"value":0.6,"random":true},
        "size":{"value":3,"random":true},
        "line_linked":{"enable":true,"distance":150,"color":"#38bdf8","opacity":0.4,"width":1},
        "move":{"enable":true,"speed":2}
    },
    "interactivity":{
        "events":{"onhover":{"enable":true,"mode":"grab"}}
    },
    "retina_detect":true
});
// Parallax Hero Image
const heroImage = document.querySelector('.hero-image img');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    heroImage.style.transform = `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.02}deg)`;
});

// Parallax Portfolio Cards
const projectCards = document.querySelectorAll('.project-card');
window.addEventListener('scroll', () => {
    projectCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const offset = window.innerHeight - rect.top;
        if(offset > 0){
            card.style.transform = `translateY(${offset * 0.05}px)`;
        }
    });
});
// Particle JS
particlesJS("particles-js", {
    "particles": {
        "number": {"value":80,"density":{"enable":true,"value_area":800}},
        "color":{"value":"#38bdf8"},
        "shape":{"type":"circle"},
        "opacity":{"value":0.6,"random":true},
        "size":{"value":3,"random":true},
        "line_linked":{"enable":true,"distance":150,"color":"#38bdf8","opacity":0.4,"width":1},
        "move":{"enable":true,"speed":2}
    },
    "interactivity":{
        "events":{"onhover":{"enable":true,"mode":"grab"}}
    },
    "retina_detect":true
});

// Fade-in skills saat scroll
window.addEventListener('scroll', () => {
    const skills = document.querySelectorAll('.skill-fill');
    skills.forEach(skill => {
        const top = skill.getBoundingClientRect().top;
        if(top < window.innerHeight - 50){
            skill.style.width = '100%';
        }
    });

    // Parallax Hero Image
    const heroImage = document.querySelector('.hero-image img');
    heroImage.style.transform = `translateY(${window.scrollY * 0.2}px) rotate(${window.scrollY * 0.02}deg)`;

    // Parallax Portfolio Cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const offset = window.innerHeight - rect.top;
        if(offset > 0){
            card.style.transform = `translateY(${offset * 0.05}px) perspective(1000px) rotateY(0deg)`;
        }
    });
});
// Musik
const musik = document.getElementById('musik');
document.body.addEventListener('click', () => musik.play());