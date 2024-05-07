import gsap from "gsap";

const initRotateAnimation = () => {
    const $tweenTargets = document.querySelectorAll("[data-animation='rotate']");

    $tweenTargets.forEach($tweenTarget => {
        const rotateAnimation = gsap.to($tweenTarget, {
            rotate: 90,
            x: 50,
            transformOrigin: 'right bottom',
            paused: true
        });

        $tweenTarget.addEventListener('click', () => {
            console.log('Vooruitgang', rotateAnimation.progress());

            if (rotateAnimation.progress()) {
                return rotateAnimation.reverse();
            }

            return rotateAnimation.play();
        });
    });
}

export default initRotateAnimation;