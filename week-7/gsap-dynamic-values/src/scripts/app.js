import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const $navbar = document.getElementById("navbar");
const $navbarHeight = $navbar.offsetHeight;
const $bannerContainer = document.getElementById("banners");
const $banners = $bannerContainer.querySelectorAll(".banner");

$banners.forEach(($banner) => {
    gsap.to($navbar, {
        '--nav-background': $banner.dataset.color,
        scrollTrigger: {
            trigger: $banner,
            start: "top top",
            end: "bottom center",
            scrub: true,
            markers: true,
        }
    })

    // ScrollTrigger.create({
    //     trigger: $banner,
    //     start: `top ${$navbarHeight}px`,
    //     end: "bottom center",
    //     markers: true,
    //     scrub: true,
    //     onEnter: () => {
    //         $navbar.style.setProperty('--nav-background', $banner.dataset.color);
    //     },
    // });
});
