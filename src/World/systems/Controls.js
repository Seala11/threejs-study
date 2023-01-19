import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

class Controls {
  constructor(camera, canvas) {
    this.controls = new OrbitControls(camera, canvas);

    this.controls.enableDamping = true;
    this.controls.minDistance = 2;
    this.controls.maxDistance = 10;

    this.controls.tick = () => this.controls.update();

    return this.controls;
  }
}

export default Controls;
