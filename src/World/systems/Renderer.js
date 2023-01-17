import { WebGLRenderer } from "three";

class Renderer {
  constructor() {
    this.renderer = new WebGLRenderer({ antialias: true });

    this.renderer.physicallyCorrectLights = true;

    this.renderer.setClearColor(0xd2b2e7, 1);
    return this.renderer;
  }
}

export default Renderer;
