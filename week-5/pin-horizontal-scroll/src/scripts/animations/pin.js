import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const initPin = () => {
    const $pinContainers = document.querySelectorAll("[data-animation='pin-right']");

    $pinContainers.forEach($pinContainer => {
        const $pinElement = $pinContainer.querySelector("[data-element='pin']");

        // gsap.to($pinElement, {
        //     scrollTrigger: {
        //         trigger: $pinContainer,
        //         start: "0% 50%",
        //         end: "100% 100%",
        //         pin: $pinElement,
        //         markers: true
        //     }
        // });

        ScrollTrigger.create({
            trigger: $pinContainer,
            start: "0% 50%",
            end: "100% 100%",
            pin: $pinElement,
            // markers: true
        })


    });
}

export default initPin;