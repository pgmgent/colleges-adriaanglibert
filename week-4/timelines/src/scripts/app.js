import gsap from "gsap";


const $boxes = document.querySelectorAll('.box');

const boxTimeline = gsap.timeline({
    repeat: Infinity,
    yoyo: true,
    defaults: {
        x: 800
    }
});

const scaleAnimation = gsap.to($boxes[1], { scale: .5 });

boxTimeline
    .to($boxes[0], {})
    .to($boxes[1], { scale: .5 }, ">+1")
    .to($boxes[2], { scale: 1.5 });
