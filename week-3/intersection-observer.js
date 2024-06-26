// Hoe het niet moet:
// document.addEventListener('scroll', () => {
//     console.log('Scrolling.');
// });
// let fadeAnimation;

const hideElements = ($els => {
    $els.forEach($el => {
        $el.animate([{ opacity: 0 }, { opacity: 0 }], { duration: 0, fill: "forwards" });
    })
});

const myFadeInAnimation = ($el) => {
    $el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 2000, fill: 'forwards' });
}

// 3. Callback functie maken voor wanneer mijn target in beeld is (of dat er een intersectie).
const functionWhenIntersecting = (changesInIntersection) => {
    changesInIntersection.forEach(changeInIntersection => {
        console.log('Is er overlap? ', changeInIntersection.isIntersecting);
        console.log('Welk element? ', changeInIntersection.target);

        if (changeInIntersection.isIntersecting) {
            // fadeAnimation.play();
            myFadeInAnimation(changeInIntersection.target);
            myScrollObserver.unobserve(changeInIntersection.target);
        }
    })
}

// 4. Eventueel de opties van de observer aanpassen.
const observerOptions = {
    threshold: .5, // Waarde tussen 0 en 1, dit betekent dat het event moet triggeren wanneer het target voor 50% aan het overlappen is (dus in beeld is.),
    // rootMargin: '-200px 0px 500px 0px' // Dit vergroot (positief) of verkleint (negatief) de 'root' waardoor er sneller een intersection kan plaatsvinden.
}

// 1. Observer aanmaken
const myScrollObserver = new IntersectionObserver(functionWhenIntersecting, observerOptions);

// 2. Aan de observer geven we een (of meerdere) target mee.
const $boxes = document.querySelectorAll('.box');
const $circle = document.querySelector('.circle');

hideElements($boxes);
$boxes.forEach($box => {
    myScrollObserver.observe($box);
}); // Gebruik een loop wanneer je meerdere targets wil toevoegen aan een observer.

// myScrollObserver.observe($box); // Observe kan maximaal 1 target ontvangen.
myScrollObserver.observe($circle);

// fadeAnimation = $box.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 2000 });
// fadeAnimation.pause();