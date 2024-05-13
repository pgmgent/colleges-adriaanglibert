import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const initHorizontalScroll = () => {
    const $scrollContainers = document.querySelectorAll("[data-animation='horizontal-scroll']");

    $scrollContainers.forEach($scrollContainer => {
        const $scrollElement = $scrollContainer.querySelector("[data-element='horizontal-element']");

        const getScrollAmount = () => {
            const windowWidth = window.innerWidth;
            const elementWidth = $scrollElement.offsetWidth;

            return elementWidth - windowWidth;
        }

        const scrollAnimation = gsap.to($scrollElement, {
            x: getScrollAmount() * -1,
        })

        ScrollTrigger.create({
            animation: scrollAnimation,
            scrub: true,
            trigger: $scrollContainer,
            pin: true,
            start: "0% 0%",
            end: () => `+=${getScrollAmount()}`,
            invalidateOnRefresh: true,
            markers: true
        });


    });
}

export default initHorizontalScroll;