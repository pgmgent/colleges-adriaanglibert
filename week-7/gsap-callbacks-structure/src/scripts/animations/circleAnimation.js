import gsap from "gsap";

const circleAnimation = () => {
    gsap.to('.circle', {
        scale: 1.5,
        y: 50,
    });
};

export default circleAnimation;