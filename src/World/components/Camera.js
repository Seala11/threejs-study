import { PerspectiveCamera } from "three";

class Camera {
  constructor() {
    this.camera = new PerspectiveCamera(35, 1, 0.1, 100);
    this.camera.position.set(0, 0, 5);

    return this.camera;
  }
}

export default Camera;
