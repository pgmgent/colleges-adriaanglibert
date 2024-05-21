import { AmbientLight, BoxGeometry, Mesh, MeshBasicMaterial, MeshLambertMaterial, PerspectiveCamera, PlaneGeometry, Scene, SpotLight, SRGBColorSpace, WebGLRenderer } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { gsap } from 'gsap'

const initFalcon = () => {
    const scene = new Scene();

    // const geometry = new BoxGeometry(3, 3, 3);
    // const material = new MeshLambertMaterial({ color: 0xfb8e00 });

    // const mesh = new Mesh(geometry, material);
    // mesh.position.set(0, 0, 0);
    // scene.add(mesh);

    const loader = new GLTFLoader().setPath('public/models/millennium_falcon/');

    let model;

    loader.load('scene.gltf', (gltf) => {
        console.log('loading model');
        const model = gltf.scene;

        model.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });

        model.position.set(0, 0, 0);
        scene.add(model);


        const $articles = document.querySelectorAll(".columns__section article");

        $articles.forEach($article => {
            gsap.to($article, {
                scale: .9,
                scrollTrigger: {
                    trigger: $article,
                    start: 'center center',
                    markers: true,
                    toggleActions: 'play reverse play reset',
                    onEnter: () => {
                        console.log(model);
                        gsap.to(model.rotation, {
                            x: 3,
                            y: 1
                        });
                    },
                    onLeave: () => {
                        gsap.to(model.rotation, {
                            x: 0,
                            y: 0
                        });
                    }
                }
            })
        })
    }, (xhr) => {
        console.log(`loading ${xhr.loaded / xhr.total * 100}%`);
    }, (error) => {
        console.error(error);
    });

    const ambientLight = new AmbientLight();
    scene.add(ambientLight);

    const spotLight = new SpotLight(0xffffff, 3000, 100, 0.22, 1);
    spotLight.position.set(0, 25, 0);
    spotLight.castShadow = true;
    spotLight.shadow.bias = -0.0001;
    scene.add(spotLight);

    const camera = new PerspectiveCamera(45, (window.innerWidth / 2) / window.innerHeight, 1, 1000);

    camera.position.set(4, 8, 15);
    camera.lookAt(0, 0, 0);

    const renderer = new WebGLRenderer({ antialias: true });
    renderer.outputColorSpace = SRGBColorSpace;
    renderer.setSize((window.innerWidth / 2), window.innerHeight);
    renderer.setClearColor(0x262626);

    document.getElementById('falcon').append(renderer.domElement);

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    animate();
}

export default initFalcon;