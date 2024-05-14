import gsap from "gsap";

function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

const xTo = gsap.quickTo('.mouse', 'x', {
    delay: .01,
    duration: .3,
    transformOrigin: 'center center'
});

const yTo = gsap.quickTo('.mouse', 'y', {
    delay: .01,
    duration: .3,
    transformOrigin: 'center center'
});

document.addEventListener('mousemove', (e) => {
    // gsap.to('.mouse', {
    //     x: e.pageX - 32,
    //     y: e.pageY - 32,
    //     delay: .01,
    //     duration: .3,
    //     transformOrigin: 'center center'
    // });

    xTo(e.pageX - 32);
    yTo(e.pageY - 32);
});