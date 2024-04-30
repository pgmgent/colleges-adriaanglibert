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

// gsap.from("[data-animation='fade-items'] > *", {
//     opacity: 0,
//     scale: .8,
//     yoyo: true,
//     repeat: -1,
//     stagger: {
//         amount: .25,
//         grid: "auto",
//         from: 4,
//     }
// })

const $gridElements = document.querySelectorAll("[data-animation='fade-items'] > *");

gsap.set($gridElements, {
    opacity: 0,
    scale: .8
})

// gsap.fromTo($gridElements, {
//     opacity: 0,
//     scale: .8
// }, {
//     opacity: 1,
//     scale: 1
// })

gsap.to($gridElements, {
    opacity: 1,
    scale: 1,
    yoyo: true,
    repeat: -1,
    stagger: {
        amount: .25,
        grid: "auto",
        from: 4,
    }
})