import gsap from "gsap";

const initDropdowns = () => {
    const $triggers = document.querySelectorAll("[data-dropdown-target]");

    $triggers.forEach($trigger => {
        const $target = document.querySelector(`[data-dropdown='${$trigger.getAttribute('data-dropdown-target')}']`);

        gsap.set($target, {
            autoAlpha: 0
        });

        const dropdownTimeline = gsap.timeline({ paused: true });

        dropdownTimeline
            .to($trigger, { rotate: 360 })
            .to($target, { autoAlpha: 1 })
            .from($target.querySelectorAll('li'), { opacity: 0, x: 20, ease: 'power2.inOut', stagger: .2 }, '>-.5');

        $trigger.addEventListener('click', () => {
            if (dropdownTimeline.progress()) {
                return dropdownTimeline.reverse();
            }

            return dropdownTimeline.play();
        });
    });
}

export default initDropdowns;