const $spinners = document.querySelectorAll("[data-animation='spinner']");

const $rotateButtons = document.querySelectorAll("[data-target='rotate-animation']");

const $staggerButtons = document.querySelectorAll("[data-target='stagger-animation']");

$spinners.forEach($spinner => {
    $spinner.animate([{
        transform: "rotate(0deg)"
    }, {
        transform: "rotate(360deg)"
    }], {
        duration: 2000,
        iterations: Infinity,
        easing: "ease-in-out"
    })
})

$rotateButtons.forEach($rotateButton => {
    $rotateButton.addEventListener('click', () => {
        const $animationElement = document.querySelector("[data-animation='rotate-animation']");

        $animationElement.animate([
            {
                transform: "rotate(0deg)"
            },
            {
                transform: "rotate(90deg)"
            }
        ], {
            iterations: 3,
            duration: 500,
            direction: "alternate",
            easing: "ease-in-out"
        });
    })
});

$staggerButtons.forEach($staggerButton => {
    $staggerButton.addEventListener('click', () => {
        const $staggerElements = document.querySelectorAll("[data-animation='stagger-animation'] > *");

        $staggerElements.forEach(($staggerElement, index) => {
            $staggerElement.animate([{
                transform: "translateX(0)"
            }, {
                transform: "translateX(100px)"
            }], {
                duration: 500,
                delay: index * 100,
                fill: "forwards",
                easing: "cubic-bezier(.3,-0.57,.62,1.45)"
            });
        })
    });
});