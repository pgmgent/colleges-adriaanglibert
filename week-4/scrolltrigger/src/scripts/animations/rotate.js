import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const initRotateAnimation = () => {
    const triggerElement = document.getElementById('scroll-trigger');
    const animateElement = document.getElementById('scroll-animated-element');

    gsap.to(animateElement, {
        rotate: 360,
        x: 300,
        scrollTrigger: {
            trigger: triggerElement,
            start: "50% 50%",
            end: "75% 25%",
            scrub: true,
            markers: true,
            pin: true,
        }
    });
}

export default initRotateAnimation;