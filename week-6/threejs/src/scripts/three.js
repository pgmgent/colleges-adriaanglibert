import { gsap } from "gsap";
import { AmbientLight, BoxGeometry, Mesh, MeshLambertMaterial, PerspectiveCamera, Scene, SphereGeometry, SpotLight, WebGLRenderer } from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'


const initThree = () => {
    const scene = new Scene();

    // Camera met setting
    const camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100);
    camera.position.set(0, 0, 0);
    camera.lookAt(-10, -10, 0);

    // Maak een doosje
    const boxGeometry = new BoxGeometry(3, 3, 3);
    const sphereGeometry = new SphereGeometry(2, 5, 5);
    const meshMaterial = new MeshLambertMaterial({
        color: 0xfb8fff
    });
    const box = new Mesh(boxGeometry, meshMaterial);
    const sphere = new Mesh(sphereGeometry, meshMaterial);

    box.position.set(2, 0, 0);
    sphere.position.set(-2, 3, 5);

    // box.rotation.x = 3;
    gsap.to(box.rotation, {
        x: 3,
        y: 1
    });

    // gsap.to(camera.position, {
    //     z: 30,
    //     x: 2,
    //     y: 3
    // });

    // Maak een loader
    const loader = new GLTFLoader().setPath('public/car/');

    loader.load('scene.gltf', (gltf) => {
        console.log('Loading model');

        const model = gltf.scene;
        model.position.set(0, 0, 0);

        scene.add(model);
    }, (progressInfo) => {
        console.log('Progress info')
    }, (errorInfo) => {
        console.log('Error info', errorInfo.message)
    })

    // Licht toevoegen
    const ambientLight = new AmbientLight();
    const spotLight = new SpotLight(0xe6e8b1, 100);

    spotLight.position.set(0, 3, 3);

    // Doosje toegevoegd aan onze scene
    scene.add(ambientLight);
    scene.add(spotLight);
    scene.add(box);
    scene.add(sphere);

    const renderer = new WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff);
    document.body.append(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    animate();
}

export default initThree;