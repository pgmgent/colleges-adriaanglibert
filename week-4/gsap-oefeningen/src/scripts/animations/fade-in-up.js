import gsap from 'gsap';

const initStaggerFade = () => {
    const $parents = document.querySelectorAll("[data-animation='stagger-parent']");

    $parents.forEach($parent => {
        const $restartButton = $parent.querySelector('[data-restart]');
        const $reverseButton = $parent.querySelector('[data-reverse]');

        const $children = $parent.querySelector("[data-animation='stagger-fade-children']").children;

        const fadeInUpAnimation = gsap.from($children, {
            autoAlpha: 0,
            y: 30,
            stagger: .25
        });

        $restartButton.addEventListener('click', () => {
            fadeInUpAnimation.restart();
        });

        $reverseButton.addEventListener('click', () => {
            fadeInUpAnimation.reverse();
        });
    });
}

export default initStaggerFade;