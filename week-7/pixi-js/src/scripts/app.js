import gsap from "gsap";
import { Application, Assets, DisplacementFilter, NoiseFilter, Sprite } from "pixi.js";

const initPixi = async () => {
    const app = new Application();

    await app.init({
        width: 800,
        height: 600,
        backgroundColor: 0x1099bb,
    });

    document.body.appendChild(app.canvas);

    app.stage.interactive = true;

    await Assets.load([
        { alias: 'dog', src: 'https://picsum.photos/id/237/200/300.jpg' },
        { alias: 'map', src: 'https://pixijs.com/assets/pixi-filters/displacement_map_repeat.jpg' }
    ]);

    const dogSprite = Sprite.from('dog');
    dogSprite.anchor.set(0.5);
    dogSprite.x = 400;
    dogSprite.y = 300;
    // dogSprite.scale.set(2.5);

    const displacementSprite = Sprite.from('map');
    displacementSprite.texture.source.addressMode = 'repeat';
    displacementSprite.position = dogSprite.position;
    // displacementSprite.scale.set(2.5);

    const noiseFilter = new NoiseFilter({
        noise: 0.5,
        seed: 1,
    });

    const displacementFilter = new DisplacementFilter({
        sprite: displacementSprite,
        scale: {
            x: 60,
            y: 120,
        },
    })

    let elapsed = 0;
    let position = 0;

    app.stage.on('mousemove', (event) => {
        position = event.globalX;
    });

    app.ticker.add((delta) => {
        elapsed += delta / 60;
        displacementSprite.x = position;
    }
    );

    gsap.to(noiseFilter, {
        noise: 0,
        seed: 0,
        duration: 2,
    });

    dogSprite.filters = [displacementFilter, noiseFilter];
    app.stage.addChild(dogSprite, displacementSprite);
}

initPixi();