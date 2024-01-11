import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'

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

// light shadow

const ambientLight = new THREE.AmbientLight(0x33333);
scene.add(ambientLight)



// color palet change
const gui = new dat.GUI();
const options = {
    sphereColor: '#ffea00',
    wireframe:false,
    speed: 0.01
}

gui.addColor(options,'sphereColor').onChange(function(e){
    sphere.material.color.set(e);
});

gui.add(options,'wireframe').onChange(function(e){
    sphere.material.wireframe = e;
});


const dircationLight = new THREE.DirectionalLight(0xffffff,0.4)
scene.add(dircationLight)
const dLightHelper = new THREE.DirectionalLightHelper(dircationLight)
scene.add(dLightHelper)

gui.add(options, 'speed',0,0.1)

const boxGemoetry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshStandardMaterial({color:0x00FF00})
const box = new THREE.Mesh(boxGemoetry,boxMaterial);
scene.add(box)

// دیواره

const place = new THREE.Mesh(placeGemoertry, PlaneMaterial)
scene.add(place)
place.rotation.x = -0.5 * Math.PI;

const grideHelper = new THREE.GridHelper(30);
scene.add(grideHelper);

const sphereGemoetry = new THREE.SphereGeometry(4,50,50);
const spherMaterial = new THREE.MeshBasicMaterial({
    color:0x0000ff,
    wireframe: false,
   
})
const sphere = new THREE.Mesh(sphereGemoetry , spherMaterial);
scene.add(sphere)
sphere.position.set(-10,10,0)

// move jump
let step = 0;

function animate(time){
    box.rotation.x = time / 1000;
    box.rotation.y = time / 1000;
    step += options.
    speed;
    sphere.position.y = 10 * Math.abs(Math.sin(step))
    renderer.render(scene, camera)
}
renderer.setAnimationLoop(animate)
