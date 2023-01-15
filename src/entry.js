import {
  WebGLRenderer,
  PerspectiveCamera,
  Scene,
  Vector3,
  Plane,
  Raycaster,
  Vector2,
  PointLight,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import DonutScene from "./objects/Scene.js";

const scene = new Scene();
const camera = new PerspectiveCamera();
const renderer = new WebGLRenderer({ antialias: true, alpha: true });
const donutScene = new DonutScene();

// scene
scene.add(donutScene);

// camera
camera.position.set(0, 1, 3);

// mouse move
const pointer = new Vector2();
const mouse = new Vector2();
const pointLight = new PointLight(0xffffff, 1, 10, 1);
pointLight.intensity = 0.5;
scene.add(pointLight);

const target = new Vector3();
let mouseX = 0;
let mouseY = 0;

const onPointerMove = (event) => {
  pointer.x = event.clientX;
  pointer.y = event.clientY;

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  pointLight.position.y = mouse.y;
  pointLight.position.x = mouse.x;

  mouseX = event.clientX - window.innerWidth / 2;
  mouseY = event.clientY - window.innerHeight / 2;

  target.x += (mouseX - target.x) * 0.02;
  target.y += (-mouseY - target.y) * 0.02;
  target.z = camera.position.z;
};

let touchX = 0;
let touchY = 0;
const onTouchMove = (event) => {
  pointer.x = event.changedTouches[0].clientX;
  pointer.y = event.changedTouches[0].clientY;

  mouse.x = (event.changedTouches[0].clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.changedTouches[0].clientY / window.innerHeight) * 2 + 1;

  pointLight.position.y = mouse.y;
  pointLight.position.x = mouse.x;

  touchX = event.clientX - window.innerWidth / 2;
  touchY = event.clientY - window.innerHeight / 2;

  target.x += (touchX - target.x) * 0.02;
  target.y += (-touchY - target.y) * 0.02;
  target.z = camera.position.z;
};

window.addEventListener("mousemove", onPointerMove);
window.addEventListener("touchmove", onTouchMove);

// controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.screenSpacePanning = false;
controls.minDistance = 1;
controls.maxDistance = 5;
controls.update();
camera.lookAt(controls.target);

// renderer
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0xa567cf, 0.5);

// render loop
const onAnimationFrameHandler = (timeStamp) => {
  donutScene.update(timeStamp);
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(onAnimationFrameHandler);
};

onAnimationFrameHandler();

// resize
const windowResizeHanlder = () => {
  const { innerHeight, innerWidth } = window;
  renderer.setSize(innerWidth, innerHeight);
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(innerWidth, innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
};
windowResizeHanlder();
window.addEventListener("resize", windowResizeHanlder);

// dom
document.body.style.margin = 0;
document.body.appendChild(renderer.domElement);
