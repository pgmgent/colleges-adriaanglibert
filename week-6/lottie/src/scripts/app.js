import gsap from "gsap";
import { DotLottie } from '@lottiefiles/dotlottie-web';

console.log('Test', document.getElementById('lottie-container'))

const $lottieContainers = document.querySelectorAll("canvas[data-src]");

$lottieContainers.forEach($lottieContainer => {
    const myAnimation = new DotLottie({
        canvas: $lottieContainer,
        src: $lottieContainer.dataset.src,
        speed: .15
    });

    document.getElementById("my-animation-play").addEventListener('click', () => {
        myAnimation.play();
    });

    console.log(myAnimation);
})
