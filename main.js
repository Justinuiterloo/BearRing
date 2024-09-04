import * as THREE from 'three';
import "./style.css";
import gsap from 'gsap';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

// Scene
const scene = new THREE.Scene();

// Size
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 1000);
camera.position.z = 10;
scene.add(camera);

// Renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;  // Enable shadows

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 5; // Corrected to 'autoRotateSpeed'

// Load MTL and OBJ
const mtlLoader = new MTLLoader();
mtlLoader.load('Ring/ring blank sketch bear.mtl', (materials) => {
  materials.preload();

  const objLoader = new OBJLoader();
  objLoader.setMaterials(materials);

  objLoader.load('Ring/ring blank sketch bear.obj', (object) => {
    scene.add(object);

    // Optionally adjust object properties
    object.position.set(0, 0, 0); 
    object.scale.set(1, 1, 1);  
  });
});

// Light

// Point light
const pointLight = new THREE.PointLight(0xffffff, 70, 100, 1.7);
pointLight.position.set(0, 10, 20);
scene.add(pointLight);

// Ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(10, 10, 10);
scene.add(directionalLight);

// Hemisphere light
const hemiLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
scene.add(hemiLight);

// Resize
window.addEventListener('resize', () => {
  // Update size
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

const loop = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop);
}

loop();

// GSAP Animation (optional if you want to animate the loaded model)
const tl = gsap.timeline({ defaults: { duration: 1 } });
// You can add GSAP animations here if needed.
