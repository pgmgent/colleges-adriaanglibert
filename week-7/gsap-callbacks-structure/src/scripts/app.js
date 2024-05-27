import gsap from "gsap";
import loadAnimation from "./animations/loadAnimation";
import circleAnimation from "./animations/circleAnimation";

const afterLoadAnimation = () => {
    circleAnimation();
}

loadAnimation(afterLoadAnimation);

// const masterTimeline = gsap.timeline();

// masterTimeline
//     .add(loadAnimation)
//     .add(circleAnimation);