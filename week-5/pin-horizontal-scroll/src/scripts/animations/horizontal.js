import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const initHorizontalScroll = () => {
    const $scrollContainers = document.querySelectorAll("[data-animation='horizontal-scroll']");

    $scrollContainers.forEach($scrollContainer => {
        const $scrollElement = $scrollContainer.querySelector("[data-element='horizontal-element']");
        const $scrollChildren = $scrollElement.children;

        if (!$scrollContainer.classList.contains('section--scroll')) {
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
                // markers: true
            });

            Array.from($scrollChildren).forEach($scrollChild => {
                // Bekijken of dit element in beeld is.
                console.log($scrollChild);
                gsap.from($scrollChild, {
                    opacity: 0,
                    scrollTrigger: {
                        trigger: $scrollChild,
                        containerAnimation: scrollAnimation,
                        toggleActions: "play pause resume reset",
                        onEnter: () => {
                            alert('Hallo')
                        }
                    }
                })
            })
        }
    });
}

export default initHorizontalScroll;