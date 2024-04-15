// Doel: Klik op een doos, speel de animatie.

const $boxes = document.querySelectorAll("[data-animation='box-animation']");

$boxes.forEach($box => {
    $box.addEventListener('click', () => {
        $box.classList.toggle('box--playing');
    })
});