function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

document.addEventListener('click', function(event) {
    var menu = document.querySelector('.menu');
    var menuToggle = document.querySelector('.menu-toggle');

    // Verificar se o clique foi dentro ou fora do menu e do botão de alternância do menu
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        menu.classList.remove('active');
    }
});

var video = document.getElementById('video1'); // Seleciona o elemento de vídeo


video.addEventListener('click', function() {
    if (video.paused) {
        video.play();
    } else {
         video.pause(); 
    }
});