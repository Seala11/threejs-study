import { PerspectiveCamera } from "three";

class Camera {
  constructor() {
    this.camera = new PerspectiveCamera(35, 1, 0.1, 100);
    this.resetPosition();
  }

  resetPosition() {
    this.camera.position.set(-0.5, -0.1, 5);
  }
}

export default Camera;
