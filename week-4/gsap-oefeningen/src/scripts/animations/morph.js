import gsap from "gsap";

const secondaryColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--secondary-color');

const initMorphAnimation = () => {
    const $startButton = document.querySelector("[data-target='timeline-morph']");

    const $morphTarget = document.querySelector(`[data-animation='${$startButton.dataset.target}']`);

    const morphAnimationTimeline = gsap.timeline({
        repeat: 1,
        yoyo: true,
        defaults: { duration: .5 }
    });

    morphAnimationTimeline
        .to($morphTarget, { y: 200 })
        .to($morphTarget, { x: 300 })
        .to($morphTarget, { backgroundColor: secondaryColor })
        .to($morphTarget, {
            rotate: '180deg',
            borderRadius: '50%'
        })
        .to($morphTarget, { scale: 2 });

    $startButton.addEventListener('click', () => {
        morphAnimationTimeline.restart();
    });
}

export default initMorphAnimation;