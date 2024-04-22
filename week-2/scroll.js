const $rotationElements = document.querySelectorAll("[data-animation='rotate']");

$rotationElements.forEach($rotationElement => {
    $rotationElement.addEventListener('click', () => {
        $rotationElement.style.setProperty('--rotation', '45deg');
    })
})