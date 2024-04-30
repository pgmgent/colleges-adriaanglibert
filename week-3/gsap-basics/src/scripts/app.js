import gsap from "gsap";

const $boxes = document.querySelectorAll('.box');

gsap.to([$boxes, 'span'], {
    x: 200,
    xPercent: 20,
    scaleX: 2,
    backgroundColor: 'blue',
    duration: 2,
    repeat: 5,
    yoyo: true,
    delay: 1,
    repeatDelay: 1,
    ease: "elastic.inOut",
    yoyoEase: "ease.inOut",
    stagger: {
        amount: 2,
        from: "center"
    },
    onRepeat: () => {
        gsap.to([$boxes, 'span'], {
            rotate: -180
        })
    },
    onComplete: () => {
        gsap.to('.box', {
            rotate: 90,
            duration: 1
        })
    }
});

