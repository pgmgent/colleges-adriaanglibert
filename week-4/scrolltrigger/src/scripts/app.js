import gsap from "gsap";
import initRotateAnimation from "./animations/rotate";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
initRotateAnimation();