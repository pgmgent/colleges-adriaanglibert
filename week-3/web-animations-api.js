const rootElementStyles = getComputedStyle(document.documentElement);

const COLORS = {
    BRAND: rootElementStyles.getPropertyValue('--brand')
}

const $boxes = document.querySelectorAll("[data-animation='move']");

$boxes.forEach($box => {
    const boxAnimation = $box.animate([
        {
            transform: "translateX(0)",
            backgroundColor: COLORS.BRAND
        },
        {
            transform: "translateX(100px)",
            backgroundColor: "red"
        },
        {
            transform: "translateX(50px)",
            backgroundColor: "pink"
        },
    ], {
        duration: 1000,
        easing: "ease",
        fill: "forwards",
        iterations: 1
    });

    boxAnimation.pause();
})