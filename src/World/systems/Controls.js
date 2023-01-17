import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

class Controls {
  constructor(camera, canvas) {
    this.controls = new OrbitControls(camera, canvas);

    // damping and auto rotation require
    // the controls to be updated each frame
    this.controls.enableDamping = true;

    this.controls.tick = () => this.controls.update();

    return this.controls;
  }
}

export default Controls;
