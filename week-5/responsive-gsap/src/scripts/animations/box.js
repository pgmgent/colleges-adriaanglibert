import { gsap } from 'gsap';

const getHalfOfScreen = () => {
    console.log('Get half of screen!', window.innerWidth / 2);
    return window.innerWidth / 2
}

const initBoxAnimation = () => {
    const $boxButton = document.getElementById('box-animation');
    const xMovement = window.innerWidth / 2;

    let boxAnimation = gsap.to('.box', {
        x: () => getHalfOfScreen(),
        paused: true
    });

    window.addEventListener('resize', () => {
        boxAnimation.reverse();

        boxAnimation.eventCallback('onReverseComplete', () => {
            boxAnimation.invalidate();
        })
    });

    $boxButton.addEventListener('click', () => {
        if (boxAnimation.progress()) {
            return boxAnimation.reverse();
        }

        return boxAnimation.play();
    });
}

export default initBoxAnimation;