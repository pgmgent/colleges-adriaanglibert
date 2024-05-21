import { gsap } from 'gsap';

const scaleAnimation = gsap.to('.circle', {
    scale: .5,
    paused: true
});

const moveAnimation = gsap.to('.circle', {
    x: 500,
    paused: true
});

const initCircleAnimation = () => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 500px)", () => { //
        scaleAnimation.play();

        return () => scaleAnimation.reverse();
    }).add("(min-width: 700px)", () => {
        moveAnimation.play();

        return () => moveAnimation.reverse();
    }).add({
        isMobile: "(max-width: 460px)",
        isDesktop: "(min-width: 1000px)"
    }, (context) => {
        console.log(context.conditions)
        const { isMobile, isDesktop } = context.conditions;

        gsap.to('.circle', {
            scale: isMobile ? 2 : isDesktop ? 4 : 1
        })
    })
}

export default initCircleAnimation;