import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const initHorizontalScroll = () => {
    const $horizontalPins = document.querySelectorAll("[data-animation='horizontal-pin']");

    $horizontalPins.forEach($horizontalPin => {
        const $elements = $horizontalPin.querySelectorAll("[data-horizontal]");

        $elements.forEach($element => {
            gsap.to($element, {
                x: (window.screenX - $element.offsetWidth)
            })
        });

        gsap.to($horizontalPin, {
            scrollTrigger: {
                trigger: $horizontalPin,
                start: "50% 50%",
                end: "200% 50%",
                pin: true,
                markers: true
            }
        });
    });
}

export default initHorizontalScroll;