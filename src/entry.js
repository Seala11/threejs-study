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
import DonutScene from "./objects/Scene.js";

const scene = new Scene();
const camera = new PerspectiveCamera();
const renderer = new WebGLRenderer({ antialias: true, alpha: true });
const donutScene = new DonutScene();

// scene
scene.add(donutScene);

// camera
camera.position.set(2, 1.8, 1);
camera.lookAt(new Vector3(0, 0, 0));

// mouse move
const pointer = new Vector2();
const mouse = new Vector2();
const pointLight = new PointLight(0xffffff, 1, 10, 1);
pointLight.intensity = 0.5;
scene.add(pointLight);

const plane = new Plane(new Vector3(0, 0, 1), 1);
const raycaster = new Raycaster();
const pointOfIntersection = new Vector3();

function onPointerMove(event) {
  pointer.x = event.clientX;
  pointer.y = event.clientY;

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  pointLight.position.y = mouse.y;
  pointLight.position.x = mouse.x;

  raycaster.setFromCamera(mouse, camera);
  raycaster.ray.intersectPlane(plane, pointOfIntersection);
  donutScene.lookAt(pointOfIntersection);
}

window.addEventListener("mousemove", onPointerMove);
window.addEventListener("touchmove", onPointerMove);

// renderer
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0xa567cf, 0.5);

// render loop
const onAnimationFrameHandler = (timeStamp) => {
  donutScene.update(timeStamp);
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
