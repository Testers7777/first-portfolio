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

document.addEventListener('DOMContentLoaded', function() {
    var options = {
        strings: ["Hello !", "My name is Tiago", "I'm 14yo", "I'm a Front-end developer", "I code just for fun"],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    };

    var typed = new Typed("#typed-output", options);
});
