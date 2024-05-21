import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const initPinSide = () => {
    const $pinContainers = document.querySelectorAll("[data-animation='pin-container']");

    $pinContainers.forEach($pinContainer => {
        const $pinChild = $pinContainer.querySelector("[data-animation='pin']");

        ScrollTrigger.create({
            trigger: $pinContainer,
            start: 'top top',
            end: 'bottom bottom',
            pin: $pinChild
        })
    });
}

export default initPinSide;