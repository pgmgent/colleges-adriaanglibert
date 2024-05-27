const { default: gsap } = require("gsap");

const loadAnimation = (callback) => {
    const tl = gsap.timeline({
        onComplete: callback
    });

    // gsap.set('.box', {});

    tl
        .from('.box', {
            opacity: 0,
            duration: 1,
            delay: 1
        })
        .to('.box', {
            x: 20
        })
        .to('.box', {
            scale: 0.75
        });
};

export default loadAnimation;