import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight)

document.body.appendChild(renderer.domElement);


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
// control mousemove
const orbit = new OrbitControls(camera, renderer.domElement)

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper)
camera.position.set(-10, 30, 30);
orbit.update()


const boxGemoetry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({color:0x00FF00})
const box = new THREE.Mesh(boxGemoetry,boxMaterial);
scene.add(box)

// دیواره
const placeGemoertry = new THREE.PlaneGeometry(30,30);
const PlaneMaterial = new THREE.MeshBasicMaterial({
    color:0xffffff,
    side: THREE.DoubleSide
})
const place = new THREE.Mesh(placeGemoertry, PlaneMaterial)
scene.add(place)
place.rotation.x = -0.5 * Math.PI;

const grideHelper = new THREE.GridHelper(30);
scene.add(grideHelper);

function animate(time){
    box.rotation.x = time / 1000;
    box.rotation.y = time / 1000;
    renderer.render(scene, camera)
}
renderer.setAnimationLoop(animate)




