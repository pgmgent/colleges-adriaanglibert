const $loadingButtons = document.querySelectorAll("[data-animation='loading']");

$loadingButtons.forEach($loadingButton => {
    $loadingButton.addEventListener('click', () => {
        $loadingButton.classList.toggle('btn--loading');
    });
})